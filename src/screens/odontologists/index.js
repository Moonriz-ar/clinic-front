import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import OdontologistTable from './OdontologistTable';
import RegistrationForm from './RegistrationForm';

function Odontologists() {
  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={4}>
        <Typography component="h4" variant="h4">
          Odontologists
        </Typography>
      </Box>
      <Box mb={4}>
        <RegistrationForm />
      </Box>
      <Box mb={4}>
        <OdontologistTable />
      </Box>
    </Container>
  );
}

export default Odontologists;
