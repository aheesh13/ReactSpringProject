import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import Welcome from './components/Welcome';

function App() {
  // Define state to track admin authentication
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const onAdminLogin = (credentials) => {
    setIsAdminAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin onAdminLogin={onAdminLogin} />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegistration />} />
        {isAdminAuthenticated ? (
          <Route path="/admin-welcome" element={<Welcome />} />
        ) : (
          // Redirect to admin-login if not authenticated
          <Route path="/admin-welcome" element={<Navigate to="/admin-login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
