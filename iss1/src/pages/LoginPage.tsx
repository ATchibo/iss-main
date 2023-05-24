import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling
import LoginRequests from '../requests/LoginRequests';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await LoginRequests.login(username, password)
      .then((response) => {
        console.log(response);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error.response);
      });

    // Reset the input fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">
          Login
        </button>
        <br />
        {/* <a href="/register" className="form-link">Register</a> */}
      </form>
    </div>
  );
};

export default LoginPage;
