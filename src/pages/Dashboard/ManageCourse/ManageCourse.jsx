import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../hooks/useAxios';

const ManageCourse = () => {
  const axios = useAxios();
  const { data: courses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axios.get('/courses');
      return res.data.courses;
    },
  });
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-center py-5">
        Total Courses: {courses.length}
      </h2>
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
                        src={course?.avater}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <td>
                <div className="space-x-2 text-white">
                  <button className="btn btn-sm btn-success text-white">
                    View
                  </button>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourse;
