import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router';

export const RequireAuth = ({children}) => {
    const {token}=useContext(AuthContext);
    const location=useLocation();
  return (
<>
      {token ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location.pathname }} />
      )}
    </>
  )
}
