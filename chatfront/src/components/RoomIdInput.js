import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";


const RoomIdInput = () => {
  const [searchRoom,setSearchRoom] = useState("")
  const [rooms, setRooms]=useState([])
  const [displayRoom, setDisplayRoom] = useState([])
  const { userToken } = useContext(AuthContext)
  
  useEffect(()=>{
      fetch('http://localhost:8000/api/rooms/?limit=100',{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
      }).then((response)=>response.json())
      .then((data)=>{
       setRooms(data.results)
      })
  },[])

    const roomSearch =(e)=>{
      e.preventDefault()
      setSearchRoom('')
      if(rooms){
        const findRoom = rooms.find((room)=>room.id === searchRoom)
        if(!findRoom){
          alert('IDが違います')
          return
        }else{
          setDisplayRoom(findRoom)
        }
      }
    }
  
  return (
    <>
      <Form >
        <Col xs={3}>
          <Form.Label>ルームID入力</Form.Label>
          <FormControl type='text' value={searchRoom} onChange={(e)=>{setSearchRoom(e.target.value)}}/>
          <Button onClick={roomSearch}>入力</Button>
        </Col>
      </Form>
        <div>{displayRoom && displayRoom.id}</div>
    </>
  )
}

export default RoomIdInput
