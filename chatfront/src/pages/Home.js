import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

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
      <button onClick={logoutBtn}>ログアウト</button>
      {/*<button onClick={createRoomBtn}>ルーム作成</button>*/}
    </div>
  );
}