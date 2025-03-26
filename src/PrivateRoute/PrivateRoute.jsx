import React from 'react'
import { Navigate } from 'react-router-dom';
import Token from './Token';

function PrivateRoute({ children }) {
  const token = Token();

  if (token) {
    return children
  }
  return <Navigate to="/" replace />
}

export default PrivateRoute;
