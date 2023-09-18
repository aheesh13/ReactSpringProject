import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserRegistration = async () => {
    // Create a request body with the new user's username and password
    const requestBody = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('/api/register', requestBody);

      if (response.status === 200) {
        // Registration successful
        // You can display a success message or redirect to the login page
        alert('Registration Successfull, you will be redirected to login page');
        navigate('/UserLogin');
      } else {
        setErrorMessage('Registration failed. Please try again.');
        navigate('/UserLogin');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Network error occurred. Please try again later.');
      navigate('/UserLogin');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form>
        <div>
          <label htmlFor="user-username">Username:</label>
          <input
            type="text"
            id="user-username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="user-password">Password:</label>
          <input
            type="password"
            id="user-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleUserRegistration}>Register</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default UserRegistration;
