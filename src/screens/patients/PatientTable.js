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

function PatientTable() {
  const [patients, setPatients] = useState([]);

  // BACKEND: en la linea 20, cambiar aca el endpoint para GET todos los pacientes
  const onClickPatients = () => {
    try {
      fetch('http://localhost:8082/patients')
        .then((response) => response.json())
        .then((result) => setPatients(result));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box mb={4}>
        <Button variant="outlined" onClick={onClickPatients}>
          Show patients
        </Button>
      </Box>
      <Box>
        {patients.length > 0 && (
          <TableContainer component={Paper} elevation={2}>
            <Table sx={{ minWidth: 700 }} aria-label="patients-table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Surname</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>DNI</TableCell>
                  <TableCell>Registration Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow
                    key={patient.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* BACKEND: cambiar los nombres de atributos a los que tengas configurado en el backend, en la entidad paciente */}
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.surname}</TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>{patient.dni}</TableCell>
                    <TableCell>{patient.registrationDate}</TableCell>
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

export default PatientTable;
