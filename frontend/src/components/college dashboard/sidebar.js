import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [showHackathonOptions, setShowHackathonOptions] = useState(false);

  const toggleHackathonOptions = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowHackathonOptions(!showHackathonOptions);
  };

  return (
    <div className="sidebar">
      <h2>College Dashboard</h2>
      <ul>
        <li><Link to="">Home</Link></li> 
        <li><Link to="host">Orgainsers Data</Link></li>
        <li>
          <a href="#" onClick={toggleHackathonOptions}>Certificates</a>
          {showHackathonOptions && (
            <ul className="sub-options">
              <li><Link to="hackathon/Ongoing">student details</Link></li>
              <li><Link to="hackathon/CertificateList">certifcate making</Link></li>
              <li><Link to="hackathon/certificate">certifcate Sample </Link></li>
              <li><Link to="hackathon/certificatedetails">certifcate Details</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="Scorecard">ScoreBoard </Link></li>
        <li><Link to="view-submissions">View Submissions</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
