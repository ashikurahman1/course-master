import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router';

const MyDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const axiosSecure = useAxiosSecure();

  const [studentCourses, setStudentCourses] = useState([]);
  const [adminStats, setAdminStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const hour = new Date().getHours();
  let greeting = '';
  if (hour >= 5 && hour < 12) greeting = 'Good morning';
  else if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
  else if (hour >= 17 && hour < 21) greeting = 'Good evening';
  else greeting = 'Good night';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user.role === 'student') {
          const res = await axiosSecure.get('/student/my-courses');
          setStudentCourses(res.data);
        } else if (user.role === 'admin') {
          const res = await axiosSecure.get('/admin/dashboard');
          setAdminStats(res.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosSecure, user.role]);

  if (loading)
    return (
      <div className="text-center py-20 text-lg font-semibold">Loading...</div>
    );

  return (
    <div className="p-3">
      <h2 className="text-2xl font-semibold text-primary">
        Hi <span>{user?.name}, </span>
        <span>{greeting}!</span>
      </h2>

      {/* Student View */}
      {user.role === 'student' && (
        <section className="shadow-md rounded-md p-6 my-10 bg-primary/10">
          <h3 className="text-xl font-semibold mb-4">My Enrolled Courses</h3>
          {studentCourses.length === 0 ? (
            <p>No courses enrolled yet.</p>
          ) : (
            studentCourses.map(course => (
              <Link
                to={`/dashboard/course-consumption/${course._id}`}
                key={course._id}
                className="mb-4 p-5 rounded-lg shadow-md bg-white border border-gray-200 hover:shadow-lg transition flex flex-col md:flex-row items-center gap-4"
              >
                {/* Course Image */}
                <img
                  src={course.course.image}
                  alt={course.course.title}
                  className="w-full md:w-40 h-28 object-cover rounded-lg shadow-sm"
                />

                {/* Course Info */}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      {course.course.title}
                    </h4>
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded ${
                        course.progress >= 100
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {Math.min(course.progress, 100)}% Completed
                    </span>
                  </div>

                  <p className="text-gray-700 font-medium mb-2">
                    Price:{' '}
                    <span className="text-primary font-bold">
                      {course.course.price} Tk
                    </span>
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div
                      className={`h-4 rounded-full ${
                        course.progress >= 100 ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min(course.progress, 100)}%` }}
                    ></div>
                  </div>

                  <p className="text-gray-500 mt-1">
                    {course.progress >= 100
                      ? 'Course Completed! '
                      : 'Keep going to complete the course.'}
                  </p>
                </div>
              </Link>
            ))
          )}
          <Link to="/courses">
            <button className="btn btn-primary btn-lg">Browse Courses</button>
          </Link>
        </section>
      )}

      {/* Admin View */}
      {user.role === 'admin' && adminStats && (
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Students */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform hover:scale-105 transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              Total Students
            </h4>
            <p className="text-3xl md:text-4xl font-bold">
              {adminStats.totalStudents}
            </p>
          </div>

          {/* Total Courses */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg transform hover:scale-105 transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              Total Courses
            </h4>
            <p className="text-3xl md:text-4xl font-bold">
              {adminStats.totalCourses}
            </p>
          </div>

          {/* Running Batches */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transform hover:scale-105 transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              Running Batches
            </h4>
            <p className="text-3xl md:text-4xl font-bold">
              {adminStats.totalRunningBatches}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyDashboard;
