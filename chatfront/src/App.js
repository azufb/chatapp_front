import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Auth from './Auth';

import Login from './Login';
import Logout from './Logout';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/logout" component={ Logout } />

          <Auth>
            <Switch>
              <Route exact path="/home" component={ Home }  />
              <Redirect from="/" to="/home" />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    );
  }
}
