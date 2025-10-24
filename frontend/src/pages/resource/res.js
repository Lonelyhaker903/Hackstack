import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No BrowserRouter here
import HostHackathon from './component/host_hackathon';
import AboutHackathon from './component/about_hackathon';
import ExploreProjects from './component/ExploreProjectsPage';
import BrowseHackathonPage from './component/BrowseHackathonPage';
import Careers from './component/Careers';
import Help from './component/Help';
import ContactSupport from './component/ContactSupport'; // Import ContactSupport component

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Section (Optional) */}
      <div className="component-container">
        <HostHackathon />
      </div>
      <div className="component-container">
        <AboutHackathon />
      </div>
      <div className="component-container">
        <ExploreProjects />
      </div>
      <div className="component-container">
        <BrowseHackathonPage />
      </div>
      <div className="component-container">
        <Careers />
      </div>
      <div className="component-container">
        <Help /> {/* Render Help component */}
      </div>
      
      {/* Routing for Pages */}
      <Routes>
        <Route path="/contact" element={<ContactSupport />} /> {/* Route for ContactSupport page */}
      </Routes>
    </div>
  );
}

export default App;
