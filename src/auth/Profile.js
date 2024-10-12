import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const fetchUserData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/users');
          if (response.ok) {
            const data = await response.json();
            console.log('User data fetched:', data); // Debugging: log the fetched data
            setUserData(data);
          } else {
            console.error('Gagal mengambil data pengguna');
          }
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
        }
      };
      fetchUserData();
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="profile-container">
      <h1>Profil Pengguna</h1>
      {userData ? (
        <div>
          <p>Nama Lengkap: {userData.nama_lengkap}</p>
          <p>Email: {userData.email}</p>
          <p>Nomor Telepon: {userData.nomor_telepon}</p>
          <p>Alamat: {userData.alamat}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
