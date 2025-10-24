import React from 'react';

const Certificate = ({ studentName = "John Smith", course = "Web Development", date = new Date().toLocaleDateString(), hackathonName = "", studentId = "STU12345" }) => {
  return (
    <div className="certificate-container" style={{
      width: "100%",
      maxWidth: "800px",
      height: "600px",
      position: "relative",
      backgroundColor: "white",
      border: "1px solid #ddd",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      padding: "20px",
      margin: "20px auto",
      fontFamily: "serif",
      backgroundImage: "url('/api/placeholder/800/600')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden"
    }}>
      {/* Blue wave decoration on left side */}
      <div className="decoration-left" style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "70px",
        background: "linear-gradient(90deg, #1a5cb0 0%, #3a7fd5 60%, rgba(255,255,255,0) 100%)",
        zIndex: 1
      }}></div>
      
      {/* Gold accent line */}
      <div className="gold-accent" style={{
        position: "absolute",
        top: 0,
        left: "40px",
        height: "100%",
        width: "15px",
        background: "linear-gradient(90deg, #d4af37 0%, #f5e28a 50%, #d4af37 100%)",
        zIndex: 2
      }}></div>

      {/* Certificate content */}
      <div className="certificate-content" style={{
        position: "relative",
        zIndex: 3,
        textAlign: "center",
        padding: "40px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        {/* Header */}
        <div className="certificate-header">
          <h1 style={{
            fontSize: "36px",
            marginBottom: "5px",
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#333"
          }}>CERTIFICATE</h1>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "normal",
            marginTop: "0",
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}>OF ACHIEVEMENT</h2>
        </div>
        
        {/* Body */}
        <div className="certificate-body" style={{
          margin: "20px 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <p style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "20px"
          }}>This certifies that</p>
          
          <h2 style={{
            fontSize: "32px",
            fontFamily: "cursive, serif",
            marginBottom: "20px",
            color: "#1a5cb0",
            fontWeight: "bold"
          }}>{studentName}</h2>
          
          <p style={{
            fontSize: "16px",
            color: "#666",
            margin: "10px 0"
          }}>has successfully completed the course</p>
          
          <h3 style={{
            fontSize: "24px",
            color: "#333",
            margin: "10px 0 20px 0"
          }}>{course}</h3>

          {hackathonName && (
            <p style={{
              fontSize: "18px",
              color: "#333",
              margin: "10px 0"
            }}>
              {hackathonName}
            </p>
          )}

          <p style={{
            fontSize: "14px",
            color: "#666",
            margin: "10px 0"
          }}>Student ID: {studentId}</p>
        </div>
        
        {/* Footer */}
        <div className="certificate-footer" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "20px"
        }}>
          <div className="date" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "14px", color: "#666" }}>DATE</p>
            <p style={{ borderTop: "1px solid #333", paddingTop: "5px", fontSize: "16px" }}>{date}</p>
          </div>
          
          <div className="signature" style={{ textAlign: "right" }}>
            <p style={{ fontSize: "14px", color: "#666" }}>SIGNATURE</p>
            <p style={{ borderTop: "1px solid #333", paddingTop: "5px", fontSize: "16px" }}>_________________</p>
          </div>
        </div>
      </div>
      
      {/* Gold seal */}
      <div className="seal" style={{
        position: "absolute",
        bottom: "60px",
        right: "60px",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #f5e28a 0%, #d4af37 100%)",
        border: "2px solid #d4af37",
        zIndex: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#5d4a1f",
        fontSize: "12px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "5px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)"
      }}>
        OFFICIAL SEAL
      </div>
    </div>
  );
};

export default Certificate;