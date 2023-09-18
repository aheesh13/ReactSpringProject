import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserLogin = async () => {
    // Create a request body with the username and password
    const requestBody = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('/user/login', requestBody);

      if (response.status === 200) {
        const navigate = useNavigate();
        navigate('/MovieList');
      } else {
        setErrorMessage('Login failed. Please check your credentials.'); // Update error message
      }
    } catch (error) {
      console.error('Network error:', error);

      // Handle network errors or unexpected issues
      setErrorMessage('Network error occurred. Please try again later.'); // Update error message
    }
  };

  return (
    <div>
      <h2>User Login</h2>
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
        <button onClick={handleUserLogin}>Login</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
    </div>
  );
};

export default UserLogin;
