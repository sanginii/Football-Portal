import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children, loggedIn, role, allowedRoles }) => {
  if (!loggedIn) {
    // If the user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // If user role is not allowed for this route, redirect to unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  // If the user is logged in and has an allowed role, render the children
  return children;
};

export default ProtectRoute;
