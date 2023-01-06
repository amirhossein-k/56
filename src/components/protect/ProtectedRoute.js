import {Outlet,Navigate} from 'react-router-dom'
const ProtectedRoute = ({
  userInfo,
  redirectPath = '/',
  children,
}) => {
  if (!userInfo) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute 
