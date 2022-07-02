import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import RegistrationForm from './RegistrationForm';
import AppointmentsTable from './AppointmentsTable';

function Appointments() {
  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={4}>
        <Typography component="h4" variant="h4">
          Appointments
        </Typography>
      </Box>
      <Box mb={4}>
        <RegistrationForm />
      </Box>
      <Box mb={4}>
        <AppointmentsTable />
      </Box>
    </Container>
  );
}

export default Appointments;
