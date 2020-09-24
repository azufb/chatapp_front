import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import {useHistory} from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <Profile/>
      <button onClick={()=>{history.push('./login')}}>ログアウト</button>
    </div>
  );
}