import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Past.css';

const API_URL = 'http://localhost:5002/hackathon';

function HackathonCard({ title, description, image, startDate, endDate, location, collegeName, showActions = true }) {
  return (
    <article className="hackathon-card">
      <img src={image} alt={title} className="hackathon-image" />
      <div className="hackathon-content">
        <h3 className="hackathon-title">{title}</h3>
        <p className="hackathon-description">{description}</p>
        <p><strong>Start:</strong> {new Date(startDate).toLocaleDateString()}</p>
        <p><strong>End:</strong> {new Date(endDate).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>College:</strong> {collegeName}</p>
      </div>
    </article>
  );
}

function HackathonList({ title, events }) {
  return (
    <section className="container">
      <h2 className="main-heading">{title}</h2>
      <div className="hackathon-cards">
        {events.length > 0 ? (
          events.map((event, index) => (
            <HackathonCard 
              key={index}
              title={event.name}
              description={event.description}
              image={event.image ? `http://localhost:5002/${event.image}` : 'pastposter.jpg'}
              startDate={event.startDate}
              endDate={event.endDate}
              location={event.location}
              collegeName={event.collegeName}
              showActions={false}  // Hides Edit/Delete buttons
            />
          ))
        ) : (
          <p>No hackathons found.</p>
        )}
      </div>
    </section>
  );
}

function Past() {
  const location = useLocation();
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchPastHackathons = async () => {
      try {
        const res = await axios.get(`${API_URL}/status/past`); 
        setHackathons(res.data);
      } catch (err) {
        console.error("Error fetching past hackathons:", err);
      }
    };

    if (location.state?.hackathons) {
      setHackathons(location.state.hackathons);
    } else {
      fetchPastHackathons();
    }
  }, [location.state]);

  return (
    <section className="past-hackathons">
      <HackathonList title="Past Hackathons" events={hackathons} />
    </section>
  );
}

export default Past;
