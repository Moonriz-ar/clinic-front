import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import PatientTable from './PatientTable';
import RegistrationForm from './RegistrationForm';

function Patients() {
  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={4}>
        <Typography component="h4" variant="h4">
          Patients
        </Typography>
      </Box>
      <Box mb={4}>
        <RegistrationForm />
      </Box>
      <Box mb={4}>
        <PatientTable />
      </Box>
    </Container>
  );
}

export default Patients;
