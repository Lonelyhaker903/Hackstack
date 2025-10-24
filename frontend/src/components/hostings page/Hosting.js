import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HackathonCard from '../../components/hackathonSection/HackathonCard';
import Confetti from 'react-confetti';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './hosting.css';

const API_URL = 'http://localhost:5002/hackathon';

function Hosting() {
  const [hackathons, setHackathons] = useState({
    future: [],
    present: [],
    past: []
  });
  
  const [activeTab, setActiveTab] = useState('present');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    startDate: '',
    endDate: '',
    location: '',
    collegeName: '',
    duration: 3,
    userEmail: '', // Add this field
  });

  const [editingId, setEditingId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    fetchAllHackathons();
  }, []);

  const fetchAllHackathons = async () => {
    try {
      const [futureRes, presentRes, pastRes] = await Promise.all([
        axios.get(`${API_URL}/status/future`),
        axios.get(`${API_URL}/status/present`),
        axios.get(`${API_URL}/status/past`)
      ]);
      
      setHackathons({
        future: futureRes.data,
        present: presentRes.data,
        past: pastRes.data
      });
    } catch (err) {
      console.error("Error fetching hackathons:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object
    const formDataObj = new FormData();
  
    // Append all form fields to the FormData object
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formDataObj.append(key, value);
      }
    });
  
    try {
      if (editingId) {
        // Update existing hackathon
        await axios.put(`${API_URL}/update/${editingId}`, formDataObj, {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensure proper content type for file uploads
          },
        });
        toast.success('Hackathon updated successfully!');
      } else {
        // Create new hackathon
        await axios.post(`${API_URL}/create`, formDataObj, {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensure proper content type for file uploads
          },
        });
        toast.success('Hackathon created successfully! 🎉');
        setCelebrate(true);
        setTimeout(() => setCelebrate(false), 4000); // Stop confetti after 4 seconds
      }
  
      // Refresh the hackathon list and reset the form
      fetchAllHackathons();
      resetForm();
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error('Error creating hackathon. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hackathon?")) {
      try {
        await axios.delete(`${API_URL}/delete/${id}`);
        toast.success("Hackathon deleted successfully!");
        fetchAllHackathons();
      } catch (err) {
        console.error("Error deleting hackathon:", err);
        toast.error("Error deleting hackathon.");
      }
    }
  };

  const handleEdit = (hackathon) => {
    setEditingId(hackathon._id);
    setFormData({
      name: hackathon.name,
      description: hackathon.description,
      image: null,
      startDate: hackathon.startDate.split('T')[0],
      endDate: hackathon.endDate.split('T')[0],
      location: hackathon.location,
      collegeName: hackathon.collegeName,
      duration: hackathon.duration || 3
    });

    if (hackathon.image) {
      setPreviewImage(`http://localhost:5002/${hackathon.image}`);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ 
      name: '', 
      description: '', 
      image: null, 
      startDate: '', 
      endDate: '', 
      location: '', 
      collegeName: '',
      duration: 3 
      
    });
    setPreviewImage(null);
  };

  return (
    <div className="container">
      {celebrate && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      
      <div className="form-container">
        <h2>{editingId ? 'Edit Hackathon' : 'Create Hackathon'}</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Hackathon Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="preview-image" />
          )}
          <div className="form-group">
            <label>Start Date & Time:</label>
            <input 
              type="datetime-local" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>End Date & Time:</label>
            <input 
              type="datetime-local" 
              name="endDate" 
              value={formData.endDate} 
              onChange={handleChange} 
              required 
            />
          </div>

          <input 
            type="text" 
            name="location" 
            placeholder="Location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="collegeName" 
            placeholder="College or Company" 
            value={formData.collegeName} 
            onChange={handleChange} 
            required 
          />
          <input 
  type="email" 
  name="userEmail" 
  placeholder="Your Email" 
  value={formData.userEmail} 
  onChange={handleChange} 
  required 
/>
          <button type="submit">{editingId ? 'Update' : 'Create'}</button>
          {editingId && (
            <button type="button" onClick={resetForm}>Cancel</button>
          )}
        </form>
      </div>

      <div className="hackathon-list">
        <div className="tabs">
          <button 
            className={activeTab === 'future' ? 'active' : ''} 
            onClick={() => setActiveTab('future')}
          >
            Future Hackathons ({hackathons.future.length})
          </button>
          <button 
            className={activeTab === 'present' ? 'active' : ''} 
            onClick={() => setActiveTab('present')}
          >
            Present Hackathons ({hackathons.present.length})
          </button>
          <button 
            className={activeTab === 'past' ? 'active' : ''} 
            onClick={() => setActiveTab('past')}
          >
            Past Hackathons ({hackathons.past.length})
          </button>
        </div>
        
        <div className="cards-container">
          {hackathons[activeTab].length > 0 ? (
            hackathons[activeTab].map(hackathon => (
              <HackathonCard
                key={hackathon._id}
                title={hackathon.name}
                description={hackathon.description}
                image={hackathon.image ? `http://localhost:5002/${hackathon.image}` : '/default-placeholder.png'}
                startDate={hackathon.startDate}
                endDate={hackathon.endDate}
                location={hackathon.location}
                collegeName={hackathon.collegeName}
                duration={hackathon.duration}
                onEdit={() => handleEdit(hackathon)}
                onDelete={() => handleDelete(hackathon._id)}
              />
            ))
          ) : (
            <p>No {activeTab} hackathons found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hosting;
