import React from 'react';
import { Container } from 'react-bootstrap';
import Logout from './Logout';

export default function Home() {
  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <button><Logout /></button>
    </div>
  );
}

/*function Home() {
  return <div>
    <Container className="center">Welcome!!</Container>
  </div>
}

export default Home();*/