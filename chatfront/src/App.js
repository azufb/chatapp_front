import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Auth from "./Auth";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />

        <Auth>
          <Switch>
            <Route exact path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
}
