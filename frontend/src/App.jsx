
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  
    const token = Cookies.get('authToken'); 

  return (
    <Router>
      <Routes>
        <Route path="/login" element={(!token && <Signin />) || <Navigate to="/" />} />
        <Route path="/register" element={(!token && <Signup />) || <Navigate to="/" />} />
        <Route path="/" element={<ProtectedRoute element={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
