import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, roles }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <Navigate to="/login" />;

  if (roles && !roles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  return children;
};
