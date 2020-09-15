import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logout from './Logout';

class Home extends Component {
  render() {
    return (
      <div>
        <Container className="center">Welcome!!</Container>
        <button><Logout /></button>
      </div>
    );
  }
}

export default Home;

/*function Home() {
  return <div>
    <Container className="center">Welcome!!</Container>
  </div>
}

export default Home();*/