import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Patients() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const onClickRegister = () => {
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

    try {
      fetch(' http://localhost:8082/patients', {
        method: 'POST',
        body: JSON.stringify(patientData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log('post response', json));
    } catch (err) {
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
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Card variant="outlined">
          <CardContent>
            <Container>
              <Typography component="div" gutterBottom variant="h4">
                Register new patient
              </Typography>

              <Grid container spacing={2}>
                <Grid item>
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
                <Grid item>
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
    </Container>
  );
}

export default Patients;
