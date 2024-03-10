import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    UserName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/insert", formData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ maxWidth: '250px', margin: '50px auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} style={inputStyle} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Sign In</button>
      </form>
      <p style={{ fontSize: '12px', marginTop: '10px' }}> <a href="F1" style={{ color: '#1976d2', textDecoration: 'none' }}>Forgot Password?</a></p>
    </div>
  );
}

const inputStyle = {
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const buttonStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default SignUp;
