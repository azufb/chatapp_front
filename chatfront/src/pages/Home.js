import React from 'react';
import { Container } from 'react-bootstrap';
import Logout from './Logout';
import Profile from "../components/Profile";

export default function Home() {

  const history = useHistory()

  const logoutBtn =()=>{
    history.push('./login')
  }

  /*const createRoomBtn = () => {
    history.push('./createRoom')
  }*/

  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <Profile/>
      <button><Logout /></button>
    </div>
  );
}