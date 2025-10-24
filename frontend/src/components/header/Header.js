import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [dropdown, setDropdown] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Manage mobile menu visibility
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isStudentLoggedIn');
    setIsStudentLoggedIn(!!loggedIn);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? '' : menu);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDropdown(''); // Close dropdown after navigation
    setMenuOpen(false); // Close menu on mobile/tablet
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu state
  };

  return (
    <div className="header">
      {/* Left Side: Logo, Hackathons, and Resource */}
      <div className="left-side">
        {/* Logo */}
        <img
          src="https://i.pinimg.com/736x/1d/74/3b/1d743bb41490128be1b2a0edc8a3e000.jpg" // Replace with your logo path
          alt="Logo"
          className="logo"
          onClick={() => handleNavigation('/')} // Navigate to home on logo click
        />

        {/* Hackathons Dropdown */}
        <div className="menu-item" onClick={() => toggleDropdown('hackathons')}>
          Hackathons
          {dropdown === 'hackathons' && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={() => handleNavigation('/present')}
              >
                Present
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleNavigation('/past')}
              >
                Past
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleNavigation('/future')}
              >
                Future
              </div>
            </div>
          )}
        </div>

        {/* Resource Link */}
        <div className="menu-item" onClick={() => handleNavigation('/resource')}>
          Resource
        </div>
      </div>

      {/* Right Side: Search bar, Host button, and profile picture/login button */}
      <div className="header-right">

        {/* Host Button */}
        <button onClick={() => handleNavigation('/HostPage')} className="host-btn">
          +Host
        </button>

        {isStudentLoggedIn ? (
          <img
            src="/path-to-profile-pic.jpg" // Replace with your profile picture path
            alt="Profile"
            className="profile-pic"
            style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={() => handleNavigation('/studentdashboard')}
          />
        ) : (
          <button onClick={() => handleNavigation('/Login')} className="login-btn">
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="hamburger"></span>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-item" onClick={() => handleNavigation('/hackathons')}>
            Hackathons
          </div>
          <div className="mobile-menu-item" onClick={() => handleNavigation('/resource')}>
            Resource
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;