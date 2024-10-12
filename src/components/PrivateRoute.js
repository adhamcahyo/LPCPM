import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const loginTime = localStorage.getItem('loginTime');
  const sessionDuration = 3 * 60 * 60 * 1000; 

  const currentTime = new Date().getTime();
  const sessionExpired = loginTime && (currentTime - loginTime > sessionDuration);

   
  if (sessionExpired) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loginTime');
    return <Navigate to="/login" replace />;
  }
 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
