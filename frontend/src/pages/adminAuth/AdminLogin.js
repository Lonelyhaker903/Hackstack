import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../adminAuth/AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleOtpChange = (element, index) => {
    if (/^[0-9]$/.test(element.value) || element.value === '') {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (element.nextSibling && element.value) {
        element.nextSibling.focus();
      }
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = pastedData.split('');
    setOtp([...newOtp, ...new Array(6 - newOtp.length).fill('')]);
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5001/admin/send-otp', { email });
      if (response.data.success) {
        alert('OTP sent successfully!');
        setIsOtpSent(true);
        setTimer(600);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('Error sending OTP. Please try again later.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    try {
      const response = await axios.post('http://localhost:5001/admin/verify-otp', { email, otp: enteredOtp });
      if (response.data.success) {
        alert('OTP verified successfully');
        navigate('/admin/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('Invalid OTP or server error. Please try again.');
    }
  };

  useEffect(() => {
    if (timer > 0 && isOtpSent) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, isOtpSent]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="auth-container">
      <h2>Admin Login</h2>
      {!isOtpSent ? (
        <form onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <p>Enter the OTP sent to {email}</p>
          <form onSubmit={handleOtpSubmit}>
            <div className="otp-inputs">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onPaste={handleOtpPaste}
                />
              ))}
            </div>
            <button type="submit">Submit OTP</button>
          </form>
          <p>Time remaining: {formatTime()}</p>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
