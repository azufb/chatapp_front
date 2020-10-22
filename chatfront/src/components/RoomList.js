import React,{useEffect,useContext,useState} from 'react'
import {AuthContext} from '../AuthService'

const RoomList = () => {
  const {userToken} = useContext(AuthContext)
  const [roomList,setRoomList] = useState([])
    useEffect(()=>{
      fetch('http://localhost:8000/api/rooms/?limit=100',{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
      }).then((response)=>response.json())
      .then((data)=>{
       setRoomList(data.results)
      })
  },[])

  console.log(roomList);
  return (
    <ul style={{listStyle:'none'}}>
      {roomList &&roomList.map((room)=>{
        return (
          <li key={room.id}>{room.id}</li>
        )
      })}
    </ul>
  )
}

export default RoomList
