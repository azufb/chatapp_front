import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'

const RoomList = () => {
  const [displayRoom,setDisplayRoom] = useState([])
  const { userToken,setCurrentRoomId } = useContext(AuthContext)
  
  useEffect(()=>{
      fetch('http://localhost:8000/api/rooms/?limit=100',{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
      }).then((response)=>response.json())
      .then((data)=>{
       setDisplayRoom(data.results)
      })
  },[])
  
  return (
    <>
    <label>ルーム一覧</label>
    <div>{displayRoom&&userToken && displayRoom.map((room)=>{
      return(
        <ul style={{listStyle: 'none'}} key={room.id}>
          <li>
            <button
              style={{background:'none',border:'none'}}
              value={room.id}
              onClick={(e)=>{setCurrentRoomId(e.target.value)}}
            >
              {room.id}
            </button>
          </li>
        </ul>
      )
    })}</div>
    </>
  )
}

export default RoomList
