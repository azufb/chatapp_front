import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory, Link } from "react-router-dom";
import CreateRooms from './CreateRooms';
import RoomList from '../components/RoomList'
import {AuthContext} from '../AuthService'

export default function Home() {

  const history = useHistory()

  const {userToken} = useContext(AuthContext)
  console.log(userToken);



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
      {/*<button onClick={() => {history.push('./createrooms')}}>ルーム作成</button>*/}
      <RoomList/>
      <CreateRooms />
      {/*<button><Logout /></button>*/}
    </div>
  );
}