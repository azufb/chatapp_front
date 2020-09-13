import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';

import Login from './Login';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/logout' component={ Logout } />

        </Switch>
      </Router>
    )
  }
}

export default App;
