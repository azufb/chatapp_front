import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//import CreateRooms from './CreateRooms';
import RoomList from '../components/RoomList'
import {AuthContext} from '../AuthService'

export default function Home() {

  const history = useHistory()

  const {userToken} = useContext(AuthContext)


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
      <button onClick={()=>{history.push('/login')}}>ログアウト</button>
      <button>
        <Link to="/createrooms">ルーム作成</Link>
      </button>
      <RoomList/>
      {/*<button><Logout /></button>*/}
    </div>
  );
}