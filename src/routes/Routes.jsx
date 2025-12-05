import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { PrivateRoute } from './PrivateRoute';
import DashboardLayout from '../layout/DashboardLayout';
import MyDashboard from '../pages/Dashboard/MyDashboard/MyDashboard';
import CreateCourse from '../pages/Dashboard/CreateCourse/CreateCourse';
import ManageCourse from '../pages/Dashboard/ManageCourse/ManageCourse';
import ManageUsers from '../pages/Dashboard/ManageUsers/ManageUsers';
import ReviewAssignment from '../pages/Dashboard/ReviewAssignment/ReviewAssignment';
import Courses from '../pages/Courses/Courses';
import CourseDetail from '../pages/CourseDetails/CourseDetails';
import CourseConsump from '../pages/Dashboard/CourseConsu/CourseConsump';
import Assignment from '../pages/Dashboard/Student/Assignment/Assignment';
import Quiz from '../pages/Dashboard/Student/Quiz/Quiz';
import EnrollmentManage from '../pages/Dashboard/EnrollmentManage/EnrollmentManage';
import Instructor from '../pages/Instructor/Instructor';
import Blogs from '../pages/Blogs/Blogs';
import ContactUs from '../pages/ContactUs/ContactUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: 'courses',
        Component: Courses,
      },
      {
        path: 'courses/:id',
        Component: CourseDetail,
      },
      {
        path: 'instructors',
        Component: Instructor,
      },

      {
        path: 'blogs',
        Component: Blogs,
      },
      {
        path: 'contact',
        Component: ContactUs,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: MyDashboard,
      },
      // Admin Route
      {
        path: 'create-course',
        Component: CreateCourse,
      },
      {
        path: 'manage-users',
        Component: ManageUsers,
      },
      {
        path: 'update-course/:id',
        Component: CreateCourse,
      },
      {
        path: 'manage-courses',
        Component: ManageCourse,
      },
      {
        path: 'manage-enrollment',
        Component: EnrollmentManage,
      },
      {
        path: 'review-assignment',
        Component: ReviewAssignment,
      },
      // Students
      {
        path: 'course-consumption/:courseId',
        Component: CourseConsump,
      },
      {
        path: 'course/:courseId/module/:moduleId/assignment',
        Component: Assignment,
      },
      {
        path: 'course-consumption/:courseId/module/:moduleId/quiz',
        Component: Quiz,
      },
    ],
  },
]);
