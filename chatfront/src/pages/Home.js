import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//import CreateRooms from './CreateRooms';

export default function Home() {

  //const history = useHistory()

  /*const logoutBtn =()=>{
    history.push('./login')
  }*/

  /*const createRoomBtn = () => {
    history.push('./createRoom')
  }*/

  return (
    <div>
      <Container className="center">Welcome!!</Container>
      <Profile/>
      <button onClick={()=>{history.push('./login')}}>ログアウト</button>
      <button>
        <Link to="/createrooms">ルーム作成</Link>
      </button>
      {/*<button><Logout /></button>*/}
    </div>
  );
}