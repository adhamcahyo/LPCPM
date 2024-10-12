import React from 'react';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', 
            color: '#ecf0f1',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '12px', 
        }}>
            <h1 style={{
                fontSize: '4rem',
                margin: '0',
                fontWeight: 'bold',
            }}>404</h1>
            <h2 style={{
                fontSize: '2rem',
                margin: '10px 0',
            }}>Page Not Found</h2>
            <p style={{
                fontSize: '1.2rem',
                margin: '20px 0',
            }}>Sorry, the page you are looking for does not exist.</p>
            <a href="/" style={{
                display: 'inline-block',
                padding: '12px 24px',
                marginTop: '20px',
                backgroundColor: '#e74c3c',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
            }}>Go to Home</a>
        </div>
    );
};

export default NotFound;
