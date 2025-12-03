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
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'courses',
        Component: Home,
      },
      {
        path: 'instructors',
        Component: Home,
      },
      {
        path: 'testimonial',
        Component: Home,
      },
      {
        path: 'blogs',
        Component: Home,
      },
      {
        path: 'contact',
        Component: Home,
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
      {
        path: 'create-course',
        Component: CreateCourse,
      },
      {
        path: 'manage-courses',
        Component: ManageCourse,
      },
    ],
  },
]);
