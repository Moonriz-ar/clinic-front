import React, { useState, useRef } from 'react';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function RegistrationForm() {
  const formRef = useRef();

  // states for snackbar
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  // states for controlled form
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const onClickRegister = () => {
    if (formRef.current.reportValidity()) {
      // BACKEND: este es el body para el POST crear paciente. cambiar aca el nombre de la propiedad a el que se use en el backend para crear nuevo paciente. Por ejemplo, si el backend esperaba la variable nombre, modificar la linea 37 de 'name,' a 'nombre: name,'
      const patientData = {
        name,
        surname,
        email,
        dni,
        address: {
          street,
          number: streetNumber,
          province,
          city,
        },
      };

      // BACKEND: en la linea 51, cambiar aca el endpoint para POST crear nuevo paciente
      try {
        fetch('http://localhost:8082/patients', {
          method: 'POST',
          body: JSON.stringify(patientData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log('post response', json));
        setOpenSuccess(true);
      } catch (err) {
        setOpenError(true);
        console.error(err);
      }

      setName('');
      setSurname('');
      setEmail('');
      setDni('');
      setStreet('');
      setStreetNumber('');
      setProvince('');
      setCity('');
    } else {
      setOpenWarning(true);
    }
  };

  return (
    <>
      <Box component="form" ref={formRef}>
        <Card variant="outlined">
          <CardContent>
            <Container>
              <Typography component="div" gutterBottom variant="h5">
                Register new patient
              </Typography>

              <Grid container spacing={2}>
                <Grid item sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    label="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    value={name}
                    variant="outlined"
                  />
                  <TextField
                    label="surname"
                    name="surname"
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Your surname"
                    required
                    value={surname}
                    variant="outlined"
                  />
                  <TextField
                    label="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    type="email"
                    value={email}
                    variant="outlined"
                  />
                  <TextField
                    label="dni"
                    name="dni"
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Your dni"
                    required
                    value={dni}
                    variant="outlined"
                  />
                </Grid>
                <Grid item sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    label="street"
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Please enter your address street"
                    required
                    value={street}
                    variant="outlined"
                  />
                  <TextField
                    label="streetNumber"
                    name="streetNumber"
                    onChange={(e) => setStreetNumber(e.target.value)}
                    placeholder="Please enter your address street number"
                    required
                    value={streetNumber}
                    variant="outlined"
                  />
                  <TextField
                    label="province"
                    name="province"
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Please enter your address province"
                    required
                    value={province}
                    variant="outlined"
                  />
                  <TextField
                    label="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Please enter your address city"
                    required
                    value={city}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
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
          Please fill the form
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        open={openSuccess}
      >
        <Alert onClose={() => setOpenSuccess(false)} severity="success">
          The new patient has been registered!
        </Alert>
      </Snackbar>
    </>
  );
}
export default RegistrationForm;
