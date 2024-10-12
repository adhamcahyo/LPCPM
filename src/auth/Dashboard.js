import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (!isAuthenticated) navigate('/login'); 
    else fetchUserData(); 
  }, [isAuthenticated, navigate]);

  const fetchUserData = async () => {
    const email = localStorage.getItem('rememberMe');
    try {
      const response = await fetch(`http://localhost:5000/api/user?email=${email}`);
      const data = await response.json();
      if (data.success) setFullName(data.user.nama_lengkap); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="../assets/gambar/korps.png" alt="Logo" className="logo" />  
        <h1 className="dashboard-title">Dashboard</h1>
      </header>
      <p className="dashboard-message">Welcome, {fullName}!</p>
      <button className="create-campaign-button">Buat Campaign Galang Dana</button>
      <div className="dashboard-content">
        <p>Desain front end untuk dashboard web galang dana dengan pewarnaan yang smooth mencakup latar belakang putih bersih, header biru muda dengan logo di kiri, sidebar abu-abu terang dengan ikon berwarna pastel, grafik donat berwarna hijau lembut dan biru laut di tengah, tombol aksi berwarna oranye lembut, teks utama hitam dengan font sans-serif, dan animasi transisi halus antar halaman.</p>
      </div>
    </div>
  );
};

export default Dashboard;
