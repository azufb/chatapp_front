import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory()

  const logoutBtn =()=>{
    history.push('./login')
  }
  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <button onClick={logoutBtn}>ログアウト</button>
    </div>
  );
}