import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthCountext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);

  const { pathname } = useLocation();
  const lastPath = pathname;
  localStorage.setItem('lastPath', lastPath)

  return (logged)
    ? children
    : <Navigate to={'/login'} />

}
