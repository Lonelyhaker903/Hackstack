import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/college dashboard/sidebar';
import Navbar from '../../components/college dashboard/Navbar';
import Host from '../../components/college dashboard/host';
import ViewSubmissions from '../../components/college dashboard/view-submissions';
import Ongoing from '../../components/college dashboard/Ongoing';
import Certificate from '../../components/college dashboard/Certificate';
import CertificateDetailsPage from '../../components/college dashboard/CertificateDetailsPage';
import CertificateList from '../../components/college dashboard/CertificateList';
import Scorecard from '../../components/college dashboard/Scorecard';
import './CollegeDashboard.css';

function CollegeDashboard() {
  const [submissionsCount, setSubmissionsCount] = useState(0);

  return (
    <div className="college-dashboard">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
          <Route
  index
  element={
    <div className="welcome-box">
      <div className="welcome-content">
        <img src="https://freedesignfile.com/image/preview/18609/graduation-hat-drawing-black-and-white-clipart.png" alt="College Logo" className="logo" />
        <div className="text-content">
          <h1 className="animated-heading">Welcome to College Dashboard</h1>
          <p>College dashboards provide data on a college's performance, including enrollment, finances, and student outcomes.</p>
          <p>They can help decision-makers make better decisions, track trends, and improve student outcomes.</p>
        </div>
      </div>
      <div className="blinking-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  }
/>

            <Route path="host" element={<Host />} />
            <Route path="Scorecard" element={<Scorecard />} />
            <Route path="view-submissions" element={<ViewSubmissions setSubmissionsCount={setSubmissionsCount} />} />
            <Route path="hackathon/Ongoing" element={<Ongoing />} />
            <Route path="hackathon/CertificateList" element={<CertificateList />} />
            <Route path="hackathon/certificate" element={<Certificate />} />
            <Route path="hackathon/certificatedetails" element={<CertificateDetailsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default CollegeDashboard;
