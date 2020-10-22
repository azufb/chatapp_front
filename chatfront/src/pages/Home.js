import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory, Link, Redirect } from "react-router-dom";
import CreateRooms from './CreateRooms';
import RoomIdInput from "../components/RoomIdInput";
import {AuthContext} from '../AuthService';
import Chat from '../components/chat';
import UsersSearch from '../components/UsersSearch'

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
    <div className="homeDisp">
      <div className="homeLeft">
        <Container className="center">Welcome!!</Container>
        <Profile/>
        <CreateRooms />
        <RoomIdInput/>
        <UsersSearch/>
        <button onClick={()=>{history.push('./login')}}>ログアウト</button>
      </div>
      <div className="homeRight">
        <Chat/>
      </div>
    </div>
  );
}