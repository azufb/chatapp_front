import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = props =>
  window.localStorage.isLoggedIn ? props.children : <Redirect to={ '/login' } />;

export default Auth;