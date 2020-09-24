import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {AuthProvider} from './AuthService'

import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LoggedInRoute from './LoggedInRoute'

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>(
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <LoggedInRoute exact path="/home" component={Home} />
        <Redirect push to='/home'/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}
