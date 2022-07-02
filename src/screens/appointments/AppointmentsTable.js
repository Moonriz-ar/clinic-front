import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AppointmentsTable() {
  const [appointments, setAppointments] = useState([]);

  // BACKEND: en la linea 20, cambiar aca el endpoint para GET todos los turnos
  const onClickAppointments = () => {
    try {
      fetch('http://localhost:8082/appointments')
        .then((response) => response.json())
        .then((result) => setAppointments(result));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box mb={4}>
        <Button variant="outlined" onClick={onClickAppointments}>
          Show appointments
        </Button>
      </Box>
      <Box>
        {appointments.length > 0 && (
          <TableContainer component={Paper} elevation={2}>
            <Table sx={{ minWidth: 700 }} aria-label="appointments-table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Patient</TableCell>
                  <TableCell>Odontologist</TableCell>
                  <TableCell>Date and Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow
                    key={appointment?.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* BACKEND: cambiar los nombres de atributos a los que tengas configurado en el backend, en la entidad paciente, odontologo y turno */}
                    <TableCell>{appointment?.id}</TableCell>
                    <TableCell>
                      {appointment?.patient?.name}{' '}
                      {appointment?.patient?.surname}
                    </TableCell>
                    <TableCell>
                      {appointment?.odontologist?.name}{' '}
                      {appointment?.odontologist?.surname}
                    </TableCell>
                    <TableCell>
                      {appointment?.appointmentDateTime?.replace('T', ' ')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
}

export default AppointmentsTable;
