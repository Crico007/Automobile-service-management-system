// Footer.js

import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        ASM Automobile Services
      </Typography>
      <Typography variant="body2" gutterBottom>
        Address: 1234 Automobile Street, City, Country
      </Typography>
      <Typography variant="body2" gutterBottom>
        Phone: +123 456 7890 | Email: info@asmautomobiles.com
      </Typography>
      <Typography variant="body2">
        <Link href="/terms" color="inherit" style={{ marginRight: '10px' }}>Terms of Service</Link>
        <Link href="/privacy" color="inherit">Privacy Policy</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} ASM Automobile Services Pvt Ltd. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
