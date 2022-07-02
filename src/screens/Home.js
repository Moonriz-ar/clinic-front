import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Instruction from '../components/instruction';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={4}>
        <Typography variant="h6">
          Hi! Please follow below steps to test the clinic project.
        </Typography>
      </Box>
      <Box mb={4}>
        <Stack spacing={2}>
          <Instruction>
            1/ Go to 'Patients' tab and register new patients
          </Instruction>
          <Instruction>
            2/ List all patients with 'Show patients' button
          </Instruction>
          <Instruction>
            3/ Go to 'Odontologists' tab and register new odontologists
          </Instruction>
          <Instruction>
            4/ List all odontologists with 'Show odontologists' button
          </Instruction>
          <Instruction>
            5/ Go to 'Appointments' tab and register new appointment by
            selecting patient, odontologist and date time.
          </Instruction>
          <Instruction>
            6/ List all appointments with 'Show appointments' button
          </Instruction>
        </Stack>
      </Box>
    </Container>
  );
}

export default Home;
