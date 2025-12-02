import React from 'react';

const DashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <ul className="space-y-2">
        {/* Everyone can see */}
        <li>
          <a href="/profile" className="text-blue-500">
            {user?.name}
          </a>
        </li>

        {/* Only students */}
        {user?.role === 'student' && (
          <>
            <li>
              <a href="/student/courses" className="text-blue-500">
                My Courses
              </a>
            </li>
            <li>
              <a href="/student/assignments" className="text-blue-500">
                Assignments
              </a>
            </li>
          </>
        )}

        {/* Only instructors */}
        {user?.role === 'instructor' && (
          <>
            <li>
              <a href="/instructor/create-course" className="text-blue-500">
                Create Course
              </a>
            </li>
            <li>
              <a href="/instructor/manage-courses" className="text-blue-500">
                Manage Courses
              </a>
            </li>
          </>
        )}

        {/* Only admins */}
        {user?.role === 'admin' && (
          <>
            <li>
              <a href="/admin/users" className="text-blue-500">
                Manage Users
              </a>
            </li>
            <li>
              <a href="/admin/courses" className="text-blue-500">
                Manage Courses
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardLayout;
