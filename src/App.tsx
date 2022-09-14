import React from 'react';
import Menu from './components/Menu/Menu'
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';


function App () {
  return (
    <div>
      <Menu/>
      <Container sx={{mt:'2em'}}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
