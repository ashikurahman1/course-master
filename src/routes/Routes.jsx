import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: '/courses',
        Component: Home,
      },
      {
        path: '/instructors',
        Component: Home,
      },
      {
        path: '/testimonial',
        Component: Home,
      },
      {
        path: '/blogs',
        Component: Home,
      },
      {
        path: '/contact',
        Component: Home,
      },
    ],
  },
]);
