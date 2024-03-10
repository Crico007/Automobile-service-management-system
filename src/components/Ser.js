import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph>
        As an exotic automobile services company, we offer a wide range of premium services to cater to the needs of our clients. Here are some of the services that set us apart from others:
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Luxury Car Maintenance
      </Typography>
      <Typography variant="body1" paragraph>
        - Comprehensive maintenance and servicing for luxury cars, ensuring optimal performance and longevity.
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Exotic Car Detailing
      </Typography>
      <Typography variant="body1" paragraph>
        - Professional detailing services to enhance the appearance and preserve the value of exotic vehicles.
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. Performance Upgrades
      </Typography>
      <Typography variant="body1" paragraph>
        - Installation of high-performance parts and upgrades to enhance the power, handling, and overall performance of exotic cars.
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. Customization Services
      </Typography>
      <Typography variant="body1" paragraph>
        - Custom paint jobs, interior modifications, and personalized enhancements to create unique and exclusive automobiles.
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. Concierge Services
      </Typography>
      <Typography variant="body1" paragraph>
        - Exclusive concierge services including vehicle pickup and delivery, event planning, and personalized assistance for our clients.
      </Typography>
    </Container >
  );
}

export default ServicesPage;
