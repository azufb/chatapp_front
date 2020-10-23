import React,{useContext} from 'react';
import { Container,Button } from 'react-bootstrap';
import Profile from "../components/Profile";
import { useHistory, Link, Redirect } from "react-router-dom";
import CreateRooms from './CreateRooms';
import RoomIdInput from "../components/RoomIdInput";
import {AuthContext} from '../AuthService';
import Chat from '../components/chat';
import UsersSearch from '../components/UsersSearch'
import RoomList from '../components/RoomList'


export default function Home() {

  const history = useHistory()

  const {userToken,userName} = useContext(AuthContext)

  if(!userToken){
    return <Redirect to='/login'/>
  }

  console.log(userToken);


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
        <RoomList/>
        <Button onClick={()=>{history.push('./login')}}>ログアウト</Button>
      </div>
      <div className="homeRight">
        <Chat/>
      </div>
    </div>
  );
}