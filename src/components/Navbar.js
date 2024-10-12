import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';  
import korpsLogo from '../assets/gambar/korps.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') setIsAuthenticated(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');  
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={korpsLogo} alt="KORPS" className="logo" />
      </a>
      <button 
        className="menuIcon" 
        onClick={toggleMenu} 
        aria-expanded={isOpen}
      >
        ☰  
      </button>
      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li className="navItem"><a href="/" className="navLink">Utama</a></li>
        <li className="navItem"><a href="/about" className="navLink">Tentang Kami</a></li>
        <li className="navItem"><a href="/donate" className="navLink">Project</a></li>
        <li className="navItem"><a href="/news" className="navLink">Berita</a></li>
        <li className="navItem"><a href="/contact" className="navLink">Kontak</a></li>
        {isAuthenticated ? (
          <>
            <li className="navItem"><a href="/dashboard" className="navLink">Dashboard</a></li>
            <li className="navItem"><a href="/profile" className="navLink">Profil</a></li>
            <li className="navItem">
  <button className="customButton" onClick={handleLogout}>Logout</button>
</li>

          </>
        ) : (
          <>
            <li className="navItem"><a href="/login" className="navLink loginLink">Login</a></li>
            <li className="navItem"><a href="/daftar" className="navLink registerLink">Register</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
