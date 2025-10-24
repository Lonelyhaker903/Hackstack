import React from "react";
import TeamMembers from "./TeamMembers";
import styles from "./studentDashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContent}>
      <TeamMembers />
    </div>
  );
};

export default Dashboard;
