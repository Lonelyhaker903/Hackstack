import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile"; // Import Profile component
import styles from "./studentDashboard.module.css";

const LayoutDashboard = () => {
  // Lift profile picture state to sync it across components
  const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/150");
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {/* Pass profilePicture and setProfilePicture to Header */}
        <Header profilePicture={profilePicture} setSelectedComponent={setSelectedComponent} />
        
        <div className={styles.content}>
          {/* Render Profile component when selectedComponent is "profile" */}
          {selectedComponent === "profile" ? (
            <Profile profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
    
  );
};

export default LayoutDashboard;
