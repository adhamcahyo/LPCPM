import React from 'react'; 

const About = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Tentang Korps</h1>
      <p style={paragraphStyle}>
        Korps adalah organisasi kemanusiaan kecil yang didirikan untuk membantu masyarakat di seluruh Indonesia. Kami saat ini memiliki 
        <span style={highlightStyle}> 85,921 anggota</span> yang tersebar di seluruh negeri. Sebagai organisasi non-profit yang juga 
        merupakan yayasan, lembaga swadaya masyarakat (LSM), dan berorientasi profit, kami berkomitmen untuk memberikan dampak positif 
        melalui program-program yang kami jalankan.
      </p>
    </div>
  );
};

// Internal styles
const containerStyle = {
  backgroundColor: '#4B0082',
  color: '#fff',
  padding: '40px',
  borderRadius: '10px',
  maxWidth: '800px',
  margin: '40px auto',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#FF69B4',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
};

const highlightStyle = {
  fontWeight: 'bold',
  color: '#28a745',
};

export default About;
