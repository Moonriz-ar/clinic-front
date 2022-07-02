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

function OdontologistTable() {
  const [odontologists, setOdontologists] = useState([]);

  // BACKEND: en la linea 20, cambiar aca el endpoint para GET todos los odontologos
  const onClickOdontologists = () => {
    try {
      fetch('http://localhost:8082/odontologists')
        .then((response) => response.json())
        .then((result) => setOdontologists(result));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box mb={4}>
        <Button variant="outlined" onClick={onClickOdontologists}>
          Show odontologists
        </Button>
      </Box>
      <Box>
        {odontologists.length > 0 && (
          <TableContainer component={Paper} elevation={2}>
            <Table sx={{ minWidth: 700 }} aria-label="odontologists-table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Surname</TableCell>
                  <TableCell>License</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {odontologists.map((odontologist) => (
                  <TableRow
                    key={odontologist.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* BACKEND: cambiar los nombres de atributos a los que tengas configurado en el backend, en la entidad odontologo */}
                    <TableCell>{odontologist.id}</TableCell>
                    <TableCell>{odontologist.name}</TableCell>
                    <TableCell>{odontologist.surname}</TableCell>
                    <TableCell>{odontologist.license}</TableCell>
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

export default OdontologistTable;
