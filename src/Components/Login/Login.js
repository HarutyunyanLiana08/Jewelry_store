import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log(data.message);
      } else {
        console.error(data.message);
      }

      const token = localStorage.getItem('token');
      const decodedToken = decodeToken(token);

      if (decodedToken.role === 1) {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    const token = localStorage.getItem('token');
    const decodedToken = decodeToken(token);
    if (decodedToken.role === 0){
      navigate('/')
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
