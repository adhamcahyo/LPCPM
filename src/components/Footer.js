import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../assets/css/Footer.css';  

const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer className="footer">
        <div className="container">
          {/* Kolom 1: Informasi Kontak */}
          <div className="column">
            <h3>Kontak Kami</h3>
            <p>Alamat: Jl. Merdeka No. 10, Jakarta</p>
            <p>Telepon: +62 812 3456 7890</p>
            <p>Email: support@korps.org</p>
          </div>

          {/* Kolom 2: Link Sosial Media */}
          <div className="column">
            <h3>Ikuti Kami</h3>
            <div className="socialMedia">
              <a href="https://facebook.com" className="socialIcon"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://instagram.com" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://twitter.com" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://linkedin.com" className="socialIcon"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

          {/* Kolom 3: Navigasi Tambahan */}
          <div className="column">
            <h3>Navigasi</h3>
            <a href="/privacy" className="link">Kebijakan Privasi</a>
            <a href="/terms" className="link">Syarat & Ketentuan</a>
            <a href="/about" className="link">Tentang Kami</a>
          </div>

          {/* Kolom 4: Newsletter Signup */}
          <div className="column">
            <h3>Newsletter</h3>
            <p>Berlangganan untuk update terbaru:</p>
            <form className="form">
              <input type="email" placeholder="Email Anda" className="input" />
              <button type="submit" className="subscribeButton">Langganan</button>
            </form>
          </div>
        </div>
 
        <div className="copyright">
          <p>© 2024 KORPS. All rights reserved.</p>
          <p>Made with ❤️ | RELAWAN KORPS PROJECT</p>
          <p>Since 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
