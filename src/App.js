import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Patients from './screens/Patients';
import Home from './screens/Home';
import Odontologists from './screens/Odontologists';
import Appointments from './screens/Appointments';
import Navbar from './components/navbar/Navbar';

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
