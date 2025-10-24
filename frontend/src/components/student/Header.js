import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./studentDashboard.module.css";

const Header = ({ setSelectedComponent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    setSelectedComponent("profile");
    setDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <h2>Student Dashboard</h2>
      <div className={styles.profileContainer}>
        <div className={styles.profile} onClick={toggleDropdown}>
          {/* Use an online image or an image from the public folder */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
            alt="Profile Logo"
            className={styles.profilePic}
          />
        </div>
        {dropdownOpen && (
          <div className={styles.dropdownMenu}>
            <ul>
              <li onClick={handleProfileClick}>My Profile</li>
              <li onClick={handleLogoutClick}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
