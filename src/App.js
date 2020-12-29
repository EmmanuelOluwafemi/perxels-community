import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';

import Home from './pages/home/Home';
import Register from './pages/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
