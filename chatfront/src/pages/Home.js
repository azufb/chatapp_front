import React,{useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory, Link } from "react-router-dom";
import CreateRooms from './CreateRooms';
import RoomList from '../components/RoomList';
import {AuthContext} from '../AuthService';
import Chat from '../components/chat';

export default function Home() {

  const history = useHistory()

  const {userToken,userName} = useContext(AuthContext)

  if(!userToken){
    return <Redirect to='/login'/>
  }


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
      <button onClick={() => {history.push('./createrooms')}}>ルーム作成</button>
      <Chat/>
      <RoomIdInput/>
      <CreateRooms />
      {/*<button><Logout /></button>*/}
    </div>
  );
}