import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';



export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar  position="static">
        <Toolbar className='barcolor'>
        <Link to='/Reg' className='barname' >Register</Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to='/B' className='barname'>Back</Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to='/Sho' className='barname'>Show</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
