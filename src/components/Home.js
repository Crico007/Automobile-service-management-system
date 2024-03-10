import React from 'react';
import { Typography } from '@mui/material';
import P1 from './Pricing';
import Pro from './Product';
import Foot from './Footer';
import A1 from './Album';

const Home = () => {
  return (
    <div>
      <center>
        <img src="2.jpg" alt="Logo" style={{ width: '200px' }} />
      </center>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <Typography variant="h6" mt={2}>
          Welcome to ASM Automobile Services website, where luxury meets precision and excellence. We understand the importance of maintaining your prized possession – whether it's a luxury automobile, a high-performance vehicle, or an exotic car. At our service center, we strive to provide top-notch services tailored to meet the unique needs of each vehicle and its owner.
          <br /><br />
          Discover our user-friendly Counseling Management System, simplifying appointment scheduling and client record management. Tailor profiles, ensure secure data storage, and enable real-time communication for effective counseling. Stay ahead with our innovative platform, fostering a supportive environment and delivering optimal guidance for mental health and well-being.
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        <img src="untitled design (4).jpg" alt="Image 1" style={{ width: '700px', borderRadius: '10px' }} />
        <div style={{ padding: '20px', width: '50%', textAlign: 'left' }}>
          <br/>
          <Pro />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        <div style={{ padding: '20px', width: '50%', textAlign: 'right' }}>
          <P1 />
          
        </div>
        <img src="lambo.jpg" alt="Image 2" style={{ width: '300px', borderRadius: '10px' }} />
        
      </div>
      <A1/>
      <Foot/>
    </div>
       
  );
}

export default Home;
