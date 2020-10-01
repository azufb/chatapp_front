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
import CreateRooms from './pages/CreateRooms';

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/createrooms" component={CreateRooms} />
        <Redirect push to='/home'/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}
