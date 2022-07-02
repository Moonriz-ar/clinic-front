import React, { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function RegistrationForm() {
  // states for snackbar
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openWarningTime, setOpenWarningTime] = useState(false);

  // states for populating the select input
  const [patientsList, setPatientsList] = useState(null);
  const [odontologistsList, setOdontologistList] = useState(null);

  // state for controlled form
  const [patientId, setPatientId] = useState('');
  const [odontologistId, setOdontologistId] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();

    // BACKEND: cambiar aca el endpoint GET para listar todos los pacientes. Es para traer los nombres de los pacientes creados y mostrarlo en el input select, asi pueden elegir el paciente para el turno.
    try {
      fetch('http://localhost:8082/patients', { signal: abortCont.signal })
        .then((response) => response.json())
        .then((result) => setPatientsList(result));
    } catch (err) {
      console.log(err);
    }

    return () => abortCont.abort();
  }, []);

  useEffect(() => {
    const abortCont = new AbortController();

    // BACKEND: cambiar aca el endpoint GET para listar todos los odontologos. Es para traer los nombres de los odontologos creados y mostrarlo en el input select, asi pueden elegir el odontologo para el turno.
    try {
      fetch('http://localhost:8082/odontologists', { signal: abortCont.signal })
        .then((response) => response.json())
        .then((result) => setOdontologistList(result));
    } catch (err) {
      console.log(err);
    }
    return () => abortCont.abort();
  }, []);

  const onClickRegister = () => {
    if (new Date(dateTime).getTime() < Date.now()) {
      setOpenWarningTime(true);
      return;
    }
    if (patientId && odontologistId) {
      // BACKEND: este es el body para el POST crear turno. Cambiar aca el nombre de la propiedad a el que se use en el backend para crear nuevo turno. Por ejemplo, si el backend esperaba la variable "fechaHora", modificar la linea 77 a 'fechaHora: dateTime,'
      const appointmentData = {
        patient: {
          id: patientId,
        },
        odontologist: {
          id: odontologistId,
        },
        appointmentDateTime: dateTime,
      };

      // BACKEND: en la linea 49, cambiar aca el endpoint para POST crear nuevo turno
      try {
        fetch('http://localhost:8082/appointments', {
          method: 'POST',
          body: JSON.stringify(appointmentData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log('post response', json);
          });
        setOpenSuccess(true);
      } catch (err) {
        setOpenError(true);
        console.error(err);
      }

      setPatientId('');
      setOdontologistId('');
      setDateTime('');
    } else {
      setOpenWarning(true);
    }
  };

  return (
    <>
      <Box component="form">
        <Card variant="outlined">
          <CardContent>
            <Container>
              <Typography component="div" gutterBottom variant="h5">
                Register new appointment
              </Typography>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="patient-select-label">Patient</InputLabel>
                    <Select
                      labelId="patient-select-label"
                      id="patient-select"
                      value={patientId}
                      label="patient"
                      onChange={(e) => setPatientId(e.target.value)}
                    >
                      {/* BACKEND: en la linea 130 y 131, modificar los nombres de las propiedades segun como este creado en la entidad paciente */}
                      {patientsList &&
                        patientsList.map((patient) => (
                          <MenuItem value={patient.id} key={patient.id}>
                            {patient.name} {patient.surname}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="odontologist-select-label">
                      odontologist
                    </InputLabel>
                    <Select
                      labelId="odontologist-select-label"
                      id="odontologist-select"
                      value={odontologistId}
                      label="odontologist"
                      onChange={(e) => setOdontologistId(e.target.value)}
                    >
                      {/* BACKEND: en la linea 153, 154, 156, modificar los nombres de las propiedades segun como este creado en la entidad odontologo */}
                      {odontologistsList &&
                        odontologistsList.map((odontologist) => (
                          <MenuItem
                            value={odontologist.id}
                            key={odontologist.id}
                          >
                            {odontologist.name} {odontologist.surname}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  sx={{ minWidth: 200 }}
                  InputLabelProps={{ shrink: true }}
                  label="Date and time"
                  onChange={(e) => setDateTime(e.target.value)}
                  type="datetime-local"
                  value={dateTime}
                  variant="outlined"
                />
              </Box>
            </Container>
          </CardContent>
          <CardActions>
            <Box ml={4} mb={2}>
              <Button variant="contained" onClick={onClickRegister}>
                Register
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Snackbar
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        open={openError}
      >
        <Alert onClose={() => setOpenError(false)} severity="error">
          Opps, there has been an error.
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={6000}
        onClose={() => setOpenWarning(false)}
        open={openWarning}
      >
        <Alert onClose={() => setOpenWarning(false)} severity="warning">
          Please select patient and odontologist
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={6000}
        onClose={() => setOpenWarningTime(false)}
        open={openWarningTime}
      >
        <Alert onClose={() => setOpenWarningTime(false)} severity="warning">
          Please select a valid date
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        open={openSuccess}
      >
        <Alert onClose={() => setOpenSuccess(false)} severity="success">
          The new appointment has been registered!
        </Alert>
      </Snackbar>
    </>
  );
}
export default RegistrationForm;
