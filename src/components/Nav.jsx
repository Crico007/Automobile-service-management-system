import React from 'react';

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '15px 0', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Apply inline styles */}
        <img src="2.jpg" alt="Logo" style={{ width: '150px', marginRight: '650px' }} /> {/* Add logo */}
        <a href="http://localhost:3000/B" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '28px', fontFamily: 'Roboto Mono, monospace' }}>Home</a>
        <a href="http://localhost:3000/Reg" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '25px', fontFamily: 'Roboto Mono, monospace' }}>SignUp</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '25px', fontFamily: 'Roboto Mono, monospace' }}>Services</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '25px', fontFamily: 'Roboto Mono, monospace' }}>Contact</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '25px', fontFamily: 'Roboto Mono, monospace' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '25px', fontFamily: 'Roboto Mono, monospace' }}>Blog</a>
      </nav>
      <div style={{ paddingTop: '50px' }}> {/* Add padding to the content */}
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;
