import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCertificate, FaUpload, FaTrophy, FaUsers, FaClipboardList } from "react-icons/fa";
import styles from "./studentDashboard.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Hack_Tr@ck</h2>
      <ul>
        <li>
          <NavLink to="/studentdashboard">
            <FaHome className={styles.icon} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/studentdashboard/certifications">
            <FaCertificate className={styles.icon} /> Certifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/studentdashboard/submission">
            <FaUpload className={styles.icon} /> Submission
          </NavLink>
        </li>
        <li>
          <NavLink to="/studentdashboard/participations">
            <FaUsers className={styles.icon} /> Participations
          </NavLink>
        </li>
        <li>
          <NavLink to="/studentdashboard/Leaderboard">
            <FaTrophy className={styles.icon} /> Scoreboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/studentdashboard/HackathonRegister">
            <FaClipboardList className={styles.icon} /> Hackathon Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
