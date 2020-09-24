import React from 'react';
import { Container } from 'react-bootstrap';
import Logout from './Logout';
import Profile from "../components/Profile";
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
      <button>
        <Link to="/createrooms">ルーム作成</Link>
      </button>
      {/*<button><Logout /></button>*/}
    </div>
  );
}