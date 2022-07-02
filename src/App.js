import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Patients from './screens/patients';
import Home from './screens/Home';
import Odontologists from './screens/odontologists';
import Appointments from './screens/appointments';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/patients">
            <Patients />
          </Route>
          <Route path="/odontologists">
            <Odontologists />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
