import React from 'react';
import { FaHeart, FaClipboard, FaBullseye, FaSearch, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import korpsLogo from '../assets/gambar/korps.png'; 






const FundraisingPage = () => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',  
      color: 'white', 
      padding: '20px', 
      minHeight: '100vh' 
    }}>

      {/* Welcome Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem' }}>Selamat Datang!</h2>
 
      </section>
      <div style={{ textAlign: 'center' }}>
      <a
        href="/mulai-donasi"
        style={{
          backgroundColor: '#f0f8ff',
          color: '#00008b',
          padding: '10px 20px',
          width: '150px',
          height: '50px',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: '50px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          margin: '0 10px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Donasi Sekarang
      </a>
      <a
        href="/event"
        style={{
          backgroundColor: '#f0f8ff',
          color: '#00008b',
          padding: '10px 20px',
          width: '150px',
          height: '50px',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: '50px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          margin: '0 10px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Event
      </a>
    </div>


      {/* Header Section */}
      <header style={{ 
        textAlign: 'center', 
        padding: '20px 0' 
      }}>
        <img src={korpsLogo} alt="Logo Korps" style={{ width: '80px', height: 'auto' }} />
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Kenapa KORPS</h1>
        <p style={{ fontSize: '1.2rem' }}>Bantu sesama yang membutuhkan</p>
      </header>
      {/* Features Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px', 
      }}>
        <div style={featureBoxStyle}>
          <FaHeart style={iconStyle} />
          <h3>Bantu</h3>
          <p>Bantu sesama yang membutuhkan</p>
        </div>
        <div style={featureBoxStyle}>
          <FaClipboard style={iconStyle} />
          <h3>Praktis</h3>
          <p>Bantu sesama dari mana pun, cukup gunakan HP kita</p>
        </div>
        <div style={featureBoxStyle}>
          <FaBullseye style={iconStyle} />
          <h3>Tepat Sasaran</h3>
          <p>Program penggalangan dana di AyoBantu dapat dipertanggungjawabkan kebenarannya</p>
        </div>
        <div style={featureBoxStyle}>
          <FaSearch style={iconStyle} />
          <h3>Transparan</h3>
          <p>Penyaluran dana dilakukan secara transparan</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        padding: '20px',
        marginTop: '20px', 
      }}>
        <div style={statBoxStyle}>
          <FaUsers style={statIconStyle} />
          <h2>61.558</h2>
          <p>#TemanPeduli telah berdonasi</p>
        </div>
        <div style={statBoxStyle}>
          <FaMoneyBillWave style={statIconStyle} />
          <h2>Rp 11.695.821.012</h2>
          <p>Dana terkumpul</p>
        </div>
      </section>
    </div>
  );
};

// Component Styles
const featureBoxStyle = {
  backgroundColor: '#FF69B4',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const iconStyle = {
  fontSize: '40px',
  marginBottom: '10px'
};

const statBoxStyle = {
  backgroundColor: '#FF69B4',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const statIconStyle = {
  fontSize: '50px',
  marginBottom: '10px'
};

export default FundraisingPage;
