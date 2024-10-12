import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../assets/css/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sessionExpired = query.get('sessionExpired');

  useEffect(() => {
    if (sessionExpired) {
      setError('Sesi Anda telah berakhir. Silakan login kembali.');
    }
  }, [sessionExpired]);  // Memperbaiki dengan menambahkan sessionExpired

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loginTime', new Date().getTime());
        if (rememberMe) {
          localStorage.setItem('rememberMe', email);
        } else {
          localStorage.removeItem('rememberMe');
        }
        setSuccessMessage('Login berhasil!');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error saat login. Silakan coba lagi.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container custom-login">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}  
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password Anda"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Ingat Saya
          </label>
        </div>
        <button type="submit">Login</button>
        <div className="additional-links">
          <a href="/daftar">Daftar</a> | 
          <a href="/login">Lupa Sandi</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
