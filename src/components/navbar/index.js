import React from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { LiStyled, LinkStyled, UlStyled } from './styles';

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <UlStyled>
          <LiStyled>
            <LinkStyled to="/">Home</LinkStyled>
          </LiStyled>
          <LiStyled>
            <LinkStyled to="/patients">Patients</LinkStyled>
          </LiStyled>
          <LiStyled>
            <LinkStyled to="/odontologists">Odontologists</LinkStyled>
          </LiStyled>
          <LiStyled>
            <LinkStyled to="/appointments">Appointments</LinkStyled>
          </LiStyled>
        </UlStyled>
      </Container>
    </AppBar>
  );
}

export default Navbar;
