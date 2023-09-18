import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = ({ onAdminLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    const requestBody = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:9002/api/admin/login', requestBody);
      if (response.status === 200) {
        // Call the onAdminLogin function passed from App.js
        onAdminLogin(requestBody);
        navigate('/admin-welcome');
      } else {
        setErrorMessage('Admin login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Network error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <div>
          <label htmlFor="admin-username">Username:</label>
          <input
            type="text"
            id="admin-username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="admin-password">Password:</label>
          <input
            type="password"
            id="admin-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleAdminLogin}>Login</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default AdminLogin;
