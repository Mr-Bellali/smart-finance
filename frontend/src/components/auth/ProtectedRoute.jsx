import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Element }) => {
  const token = Cookies.get('authToken');
  return token ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;