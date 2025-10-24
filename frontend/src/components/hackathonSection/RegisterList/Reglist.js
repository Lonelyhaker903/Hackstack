import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Reglist.css';

function Reglist() {
  const [registrations, setRegistrations] = useState([]);
  const [teamId, setTeamId] = useState(''); // State to hold the team ID
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:5001/api/registration/registrations')
      .then((res) => {
        if (res.data.status === 'Success') {
          setRegistrations(res.data.data); // Access data from response
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch((error) => {
        console.error('Error fetching registrations:', error);
      });
  }, []);

  const handleAddToTeam = async (participantId) => {
    if (!teamId) {
      alert('Please provide a valid team ID.');
      return;
    }

    try {
      const response = await Axios.post('http://localhost:5001/api/team/add-to-team', {
        participantId,
        teamId, // Include team ID
      });

      if (response.data.status === 'Success') {
        alert('Participant added to team successfully!');
      } else {
        alert(response.data.message || 'Failed to add participant to team.');
      }
    } catch (error) {
      console.error('Error adding to team:', error);
      alert('An error occurred while adding participant to team.');
    }
  };

  const handleNavigateToRegistration = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>REGISTRATION LIST</h1>
      <div className="team-id-input">
        <label htmlFor="teamId">Team ID:</label>
        <input
          type="text"
          id="teamId"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          placeholder="Enter Team ID"
        />
      </div>
      {registrations.length > 0 ? (
        <table className="registration-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Year of Study</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td>{registration.name}</td>
                <td>{registration.rollno}</td>
                <td>{registration.yearOfStudy}</td>
                <td>{registration.branch}</td>
                <td>{registration.email}</td>
                <td>
                  <button onClick={() => handleAddToTeam(registration._id)}>
                    Add to Team
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No registrations available.</p>
      )}
      <button className="apply-button" onClick={handleNavigateToRegistration}>
        Back to Registration
      </button>
    </div>
  );
}

export default Reglist;
