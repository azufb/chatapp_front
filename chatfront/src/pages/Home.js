import React from 'react';
import { Container } from 'react-bootstrap';
import Logout from './Logout';
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <Profile/>
      <button><Logout /></button>
    </div>
  );
}