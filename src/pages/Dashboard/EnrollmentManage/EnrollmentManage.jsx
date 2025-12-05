import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const EnrollmentManage = () => {
  const axiosSecure = useAxiosSecure();

  const [courseFilter, setCourseFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');

  // Fetch courses for dropdown
  const { data: courses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/courses');
      return res.data.courses || [];
    },
  });

  // Fetch enrollments with filters
  const {
    data: enrollments = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['enrollments', courseFilter, batchFilter],
    queryFn: async () => {
      const params = {};
      if (courseFilter) params.courseId = courseFilter;
      if (batchFilter) params.batch = batchFilter;

      const res = await axiosSecure.get('/admin/enrollments', { params });
      return res.data.enrollments || [];
    },
    keepPreviousData: true,
  });

  // Refetch automatically when filters change
  React.useEffect(() => {
    refetch();
  }, [courseFilter, batchFilter]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5">Enrollment Management</h2>

      {/* Filters */}
      <div className="flex gap-3 mb-5">
        <select
          className="select select-bordered"
          value={courseFilter}
          onChange={e => setCourseFilter(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map(c => (
            <option key={c._id} value={c._id}>
              {c.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Batch"
          className="input input-bordered"
          value={batchFilter}
          onChange={e => setBatchFilter(e.target.value)}
        />

        <button className="btn btn-primary" onClick={() => refetch()}>
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Batch</th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : enrollments.length > 0 ? (
              enrollments.map((enroll, i) => (
                <tr key={enroll._id}>
                  <th>{i + 1}</th>
                  <td>{enroll.student?.name}</td>
                  <td>{enroll.student?.email}</td>
                  <td>{enroll.course?.title}</td>
                  <td>{enroll.batch || '-'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No enrollments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentManage;
