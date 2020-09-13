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
import Auth from './Auth';
import Home from './Home';
// import User from './User';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/logout' component={ Logout } />
          <Auth>
            <Switch>
              <Route exact path='/home' component={ Home } />
              <Redirect exact path='/' to='/home' />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    )
  }
}

export default App;
