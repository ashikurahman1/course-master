import { FaBookOpen, FaPen, FaUsers } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';
import { IoLogOut, IoSettingsSharp } from 'react-icons/io5';
import { MdQuiz } from 'react-icons/md';
import { Link, Outlet, useNavigate } from 'react-router';
import { PiNotePencilFill } from 'react-icons/pi';
import { Toaster } from 'react-hot-toast';
const DashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div className="">
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <nav className="navbar w-full bg-indigo-100 flex justify-between pr-4 lg:pr-10">
              <div className="flex items-center">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  {/* Sidebar toggle icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-5"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 4v16"></path>
                    <path d="M14 10l2 2l-2 2"></path>
                  </svg>
                </label>
                <h3 className="text-2xl font-semibold text-primary">
                  Course Master
                </h3>
              </div>

              <div className="avatar flex items-center gap-2">
                <h2 className="hidden lg:inline text-lg text-primary font-semibold">
                  {user?.name}
                </h2>
                <div className="w-10 rounded-full">
                  <img
                    src={user?.avatar}
                    className=" border-3 rounded-full border-primary"
                  />
                </div>
              </div>
            </nav>

            {/* Page content here */}
            <div className="p-4">
              <Outlet />
            </div>
          </div>

          <div className="drawer-side is-drawer-close:overflow-visible">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
              {/* Sidebar content here */}
              <ul className="menu w-full grow py-15 text-lg text-primary space-y-4">
                {/* List item */}
                <li className="">
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Dashboard"
                  >
                    {/* Home icon */}
                    <IoMdHome size={20} />
                    <span className="is-drawer-close:hidden">My Dashboard</span>
                  </button>
                </li>

                {/* Student related routes*/}
                {user?.role === 'student' && (
                  <>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip=" Course Consumption"
                      >
                        {/* Settings icon */}
                        <FaBookOpenReader size={18} />
                        <span className="is-drawer-close:hidden">
                          Course Consumption
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Assignment"
                      >
                        {/* Settings icon */}
                        <FaPen size={18} />
                        <span className="is-drawer-close:hidden">
                          Assignment
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Quiz"
                      >
                        {/* Settings icon */}
                        <MdQuiz size={20} />

                        <span className="is-drawer-close:hidden">Quiz</span>
                      </button>
                    </li>
                  </>
                )}

                {/* Only admins */}
                {user?.role === 'admin' && (
                  <>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Manage users"
                      >
                        {/* Settings icon */}
                        <FaUsers size={18} />
                        <span className="is-drawer-close:hidden">
                          Manage users
                        </span>
                      </button>
                    </li>
                  </>
                )}

                {(user?.role === 'admin' || user?.role === 'instructor') && (
                  <>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Manage Courses"
                      >
                        {/* Settings icon */}
                        <FaPen size={18} />
                        <span className="is-drawer-close:hidden">
                          Manage Courses
                        </span>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/create-course"
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Create Course"
                      >
                        {/* Settings icon */}

                        <FaBookOpen size={18} />
                        <span className="is-drawer-close:hidden">
                          Create Course{' '}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Create Course"
                      >
                        {/* Settings icon */}
                        <PiNotePencilFill size={18} />
                        <span className="is-drawer-close:hidden">
                          Review Assignment{' '}
                        </span>
                      </button>
                    </li>
                  </>
                )}

                {/* List item */}
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Profile"
                  >
                    {/* Settings icon */}
                    <IoSettingsSharp size={20} />
                    <span className="is-drawer-close:hidden">My Profile</span>
                  </button>
                </li>
              </ul>
              <div>
                <ul className="menu w-full grow py-15 text-lg text-primary">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Logout"
                    >
                      {/* Settings icon */}
                      <IoLogOut size={20} />
                      <span className="is-drawer-close:hidden">Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default DashboardLayout;
