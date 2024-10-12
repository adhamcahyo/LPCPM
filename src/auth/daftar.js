import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Daftar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Daftar = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const assessPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 10) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    assessPasswordStrength(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!termsAccepted) {
      setErrorMessage('Anda harus menyetujui syarat dan ketentuan.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Password dan konfirmasi password tidak cocok');
      return;
    }
  
    if (passwordStrength !== 'Strong') {
      setErrorMessage('Password tidak cukup kuat. Harap gunakan password yang lebih kuat.');
      return;
    }
  
    try {
      await axios.post('http://localhost:5000/api/users', {
        nama_lengkap: namaLengkap,
        email,
        nomor_telepon: nomorTelepon,
        alamat,
        password,
      });
      
      setAlertVisible(true);
      window.location.href = '/login';
      
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message || 'Pengguna sudah terdaftar dengan email ini.');
        } else {
          setErrorMessage('Gagal mendaftar, silakan coba lagi.');
        }
      } else {
        setErrorMessage('Gagal mendaftar, silakan coba lagi.');
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Daftar</h2>
        {alertVisible && <div className="alert">Pendaftaran berhasil! Anda akan diarahkan ke halaman login.</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input 
            type="text" 
            value={namaLengkap} 
            onChange={(e) => setNamaLengkap(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Nomor Telepon</label>
          <input 
            type="tel" 
            value={nomorTelepon} 
            onChange={(e) => setNomorTelepon(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Alamat</label>
          <input 
            type="text" 
            value={alamat} 
            onChange={(e) => setAlamat(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={password} 
              onChange={handlePasswordChange} 
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
          <label>Konfirmasi Password</label>
          <div className="password-input">
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
              className="toggle-password"
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div className="password-strength">Kekuatan Password: {passwordStrength}</div>
        <div className="terms">
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={() => setTermsAccepted(!termsAccepted)} 
            required 
          /> <label>
          Saya telah menyetujui <a href="/terms" style={{ textDecoration: 'underline', color: 'white' }}>
              S & K menjadi relawan KORPS
          </a>.
      </label>
         

        </div>
        {/* <button type="submit" className="custom-button">Daftar</button> */}
      </form>
      <div className="warning-container"> 
        <div className="warning">KORPS belum menerima relawan.</div>
      </div>
    </div>
  );
};

export default Daftar;
