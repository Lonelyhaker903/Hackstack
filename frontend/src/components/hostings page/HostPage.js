import React from "react";
import { useNavigate } from "react-router-dom";
import "./HostPage.css";

const HostPage = () => {
  const navigate = useNavigate();

  return (
    <div className="host-container">
      <h1 className="host-title">How to Host a Hackathon</h1>

      <div className="roadmap-container">
        <svg viewBox="0 0 800 290" className="roadmap">
          {/* Road Background - Wave Pattern */}
          <path
            d="M100,200 Q200,350 300,200 Q400,50 500,200 Q600,350 700,200"
            stroke="black"
            strokeWidth="30"
            fill="none"
            strokeLinecap="round"
          />

          {/* White Dashed Centerline */}
          <path
            d="M100,200 Q200,350 300,200 Q400,50 500,200 Q600,350 700,200"
            stroke="white"
            strokeWidth="5"
            fill="none"
            strokeDasharray="15,15"
            strokeLinecap="round"
          />

          {/* Instruction Points */}
          {/* Step 1 - Left Side */}
          <circle cx="100" cy="200" r="8" fill="red" />
              <text x="300" y="170" className="roadmap-text">
              <tspan x="50" dy="0">Step 1: Read</tspan>
              <tspan x="50" dy="1.2em">the custom</tspan>
              <tspan x="50" dy="1.2em">Instruction</tspan>
            </text>


          {/* Step 2 - Right Side */}
          <circle cx="300" cy="200" r="8" fill="red" />
          <text x="320" y="220" className="roadmap-text">
            <tspan x="320" dy="0">Step 2: When</tspan>
            <tspan x="320" dy="1.2em">you host</tspan>
            <tspan x="320" dy="1.2em">hackathon</tspan>
          </text>

          {/* Step 3 - Right Side (Top) */}
          <circle cx="500" cy="200" r="8" fill="red" />
          <text x="350" y="180" className="roadmap-text">
            <tspan x="520" dy="0">Step 3: After</tspan>
            <tspan x="520" dy="1.2em">login you</tspan>
            <tspan x="520" dy="1.2em">get hosting</tspan>
          </text>

          {/* Step 4 - Right Side */}
          <circle cx="700" cy="200" r="8" fill="red" />
          <text x="720" y="220" className="roadmap-text">
            <tspan x="720" dy="0">Step 4: Create</tspan>
            <tspan x="720" dy="1.2em">hackathon</tspan>
            <tspan x="720" dy="1.2em">and submit</tspan>
          </text>
        </svg>
      </div>

      {/* When to Host a Hackathon Section */}
      <h2 className="host-timing-title">When to Host a Hackathon?</h2>

      <div className="host-timing-container">
        <div className="host-timing-label">
          <label className="host-timing-label-text">Hosting</label>
          <p className="host-timing-description">
            A present hackathon is a great way to engage tech enthusiasts, encourage innovation, and solve real-world problems efficiently.
          </p>
          <button className="host-btn" onClick={() => navigate("/organiserlogin")}>
            Host Hackathon
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostPage;
