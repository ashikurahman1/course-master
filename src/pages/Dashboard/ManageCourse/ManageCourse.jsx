import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../../hooks/useAxios';

const ManageCourse = () => {
  const axios = useAxios();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { data: courses = [], refetch } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axios.get('/courses');
      return res.data.courses;
    },
  });

  // Delete Functions
  const handleDelete = (course) => {

    try


  }
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center py-5">
        Total Courses: {courses.length}
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Details</th>
              <th>Instructors Details</th>
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
                <td>{course?.price} Tk</td>
                <td>
                  <div className="space-x-2 text-white flex flex-col items-center gap-2 lg:flex-row">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="btn btn-sm btn-success text-white"
                    >
                      View
                    </button>
                    <button className="btn btn-sm btn-primary">Edit</button>
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
      </div>
    </div>
  );
};

export default ManageCourse;
