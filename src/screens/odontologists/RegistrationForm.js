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
  const [license, setLicense] = useState('');

  const onClickRegister = () => {
    if (formRef.current.reportValidity()) {
      // BACKEND: este es el body para el POST crear odontologo. Cambiar aca el nombre de la propiedad a el que se use en el backend para crear nuevo odontologo. Por ejemplo, si el backend esperaba la variable licencia, modificar la linea 34 de 'license,' a 'licencia: license,'
      const odontologistData = {
        name,
        surname,
        license,
      };

      // BACKEND: en la linea 39, cambiar aca el endpoint POST crear nuevo odontologo
      try {
        fetch('http://localhost:8082/odontologists', {
          method: 'POST',
          body: JSON.stringify(odontologistData),
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
      setLicense('');
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
              <Typography component="div" gutterBottom variant="h4">
                Register new odontologist
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
                    label="license"
                    name="license"
                    onChange={(e) => setLicense(e.target.value)}
                    placeholder="Enter license number"
                    required
                    value={license}
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
          The new odontologist has been registered!
        </Alert>
      </Snackbar>
    </>
  );
}
export default RegistrationForm;
