import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="contact-info">
            <span className="contact-item">
              <FaPhone className="icon" /> (+54 9 11) 6875-4000
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <FaEnvelope className="icon" /> info@lacabrera.com.ar
            </span>
          </div>
          <div className="language-switch">
            <FaGlobe className="icon" /> ES
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src={logo} alt="La Cabrera" className="logo-img" />
          </Link>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/reservations">Reservas</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li className="mobile-booking">
              <Link to="/reservations" className="book-button">Reservar Mesa</Link>
            </li>
          </ul>
          
          <Link to="/reservations" className="book-button desktop-booking">
            Reservar Mesa
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
