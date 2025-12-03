import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
const ManageCourse = () => {
  const axios = useAxios();
  const axiosSecure = useAxiosSecure();
  const [batchModalCourse, setBatchModalCourse] = useState(null);
  const [batches, setBatches] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const { data: courses = [], refetch } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axios.get('/courses');
      return res.data.courses;
    },
  });

  // Define Batch
  const openBatchModal = course => {
    setBatchModalCourse(course);
    setBatches(course.batches || []);
  };

  const saveBatches = async () => {
    try {
      await axiosSecure.patch(`/admin/update-course/${batchModalCourse._id}`, {
        batches,
      });
      Swal.fire('Batches updated successfully', 'success');
      setBatchModalCourse(null);
      setBatches([]);
      refetch();
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'Failed to update batches', 'error');
    }
  };

  // Delete Functions
  const handleDelete = async course => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: `Do you really want to delete "${course.title}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
      });

      // If user cancels
      if (!result.isConfirmed) return;

      // Delete API call
      await axiosSecure.delete(`/admin/delete-course/${course._id}`);

      Swal.fire({
        title: 'Deleted!',
        text: 'Course has been deleted successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });

      refetch();
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the course.',
        icon: 'error',
      });
      console.error(error);
    }
  };
  return (
    <div className="">
      <h2 className="text-2xl font-semibold py-5">
        Total Courses: {courses.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Details</th>
              <th>Instructors Details</th>
              <th>Batch Info</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {courses.map(course => (
              <tr key={course?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={course?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course?.title}</div>
                      <div className="text-sm opacity-50 line-clamp-1">
                        {course?.description}{' '}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {course?.instructor?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {course?.category}
                  </span>
                </td>
                <td>
                  {course.batches?.length > 0 ? (
                    <ul>
                      {course.batches.map((b, i) => (
                        <li key={i}>
                          {b.startDate
                            ? new Date(b.startDate).toLocaleDateString()
                            : 'No date'}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    'No batches'
                  )}{' '}
                </td>
                <td>{course?.price} Tk</td>
                <td>
                  <div className="space-x-2 text-white flex flex-col items-center gap-2 lg:flex-row">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="btn btn-sm btn-neutral "
                    >
                      View
                    </button>
                    <Link
                      to={`/dashboard/update-course/${course._id}`}
                      className="btn btn-sm btn-neutral"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => openBatchModal(course)}
                    >
                      Define Batch
                    </button>
                    <button
                      onClick={() => handleDelete(course)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedCourse && (
          <dialog id="courseModal" className="modal modal-open">
            <div className="modal-box max-w-8/12 w-full">
              <h3 className="font-bold text-lg mb-4">{selectedCourse.title}</h3>
              <img
                src={selectedCourse.image}
                className="w-full h-56 object-cover rounded"
              />
              <div
                className="mt-4 prose p-6"
                dangerouslySetInnerHTML={{ __html: selectedCourse.description }}
              ></div>

              <h4 className="font-semibold mt-4">Syllabus:</h4>
              <ul className="list-disc ml-6">
                {selectedCourse.syllabus.map((item, i) => (
                  <li key={i}>
                    <strong>{item.topic}:</strong> {item.details}
                  </li>
                ))}
              </ul>

              <div className="mt-3">
                <p>
                  <strong>Instructor:</strong> {selectedCourse.instructor.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedCourse.instructor.email}
                </p>
              </div>

              <p className="mt-3">
                <strong>Price:</strong> {selectedCourse.price} Tk
              </p>
              <button
                className="btn w-full btn-error text-white mt-3"
                onClick={() => setSelectedCourse(null)}
              >
                Close
              </button>
            </div>
          </dialog>
        )}

        {batchModalCourse && (
          <dialog className="modal modal-open">
            <div className="modal-box max-w-lg w-full">
              <h3 className="font-bold text-lg mb-4">
                Define Batches for {batchModalCourse.title}
              </h3>

              {batches.map((batch, i) => (
                <div key={i} className="flex flex-col gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Batch Name"
                    value={batch.name || ''}
                    onChange={e => {
                      const newBatches = [...batches];
                      newBatches[i].name = e.target.value;
                      setBatches(newBatches);
                    }}
                    className="input input-bordered w-full "
                  />
                  <input
                    type="date"
                    value={batch.startDate ? batch.startDate.slice(0, 10) : ''}
                    onChange={e => {
                      const newBatches = [...batches];
                      newBatches[i].startDate = e.target.value;
                      setBatches(newBatches);
                    }}
                    className="input input-bordered w-full"
                  />
                  <input
                    type="date"
                    value={batch.endDate ? batch.endDate.slice(0, 10) : ''}
                    onChange={e => {
                      const newBatches = [...batches];
                      newBatches[i].endDate = e.target.value;
                      setBatches(newBatches);
                    }}
                    className="input input-bordered w-full"
                  />
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={() =>
                      setBatches(batches.filter((_, index) => index !== i))
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="btn w-full btn-neutral mb-2"
                onClick={() =>
                  setBatches([
                    ...batches,
                    { name: '', startDate: '', endDate: '' },
                  ])
                }
              >
                Add Batch
              </button>

              <div className="flex gap-2 mt-4">
                <button className="btn btn-primary w-1/2" onClick={saveBatches}>
                  Save Batches
                </button>
                <button
                  className="btn btn-error w-1/2"
                  onClick={() => setBatchModalCourse(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default ManageCourse;
