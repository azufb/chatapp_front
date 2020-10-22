import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";
import axios from 'axios';


const RoomIdInput = () => {
  const [searchRoom,setSearchRoom] = useState("")
  const [rooms, setRooms]=useState([]);
  const [displayRoom, setDisplayRoom] = useState([])
  const [id, setId] = useState("");
  const { userToken, setUserToken, roomsToken, setRoomsToken,setCurrentRoomId } = useContext(AuthContext)
  
  /*useEffect(()=>{
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
    }*/
  
    const clickJoinBtn = async () => {
      if(!id){
        return alert('ルーム名を入力してください')
      }else{
          // const headers = {
          //     'Content-Type': 'application/json',
          //     'Authorization': 'JWT' + ' ' + userToken
          // }
          // await axios.post(`http://localhost:8000/api/rooms/${id}/join/`, {
          //     headers: headers
          // })
          axios({
            method: 'post',
            url: `http://localhost:8000/api/rooms/${id}/join/`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `JWT ${userToken}`
            },
          })
          .then((response) => {
            console.log(response);
            setRoomsToken(response.data.token)
            //responseにtokenないのでroomsTokenはset出来なさそうです
            setCurrentRoomId(id)
          })
      }
    };
  
  return (
    <>
      <p>
        <b>ルーム入室</b>
      </p>
      <Form>
        <Col xs={5}>
          <Form.Group controlId="name">
            <Form.Label>ルームID入力</Form.Label>
            <FormControl 
              type='text' 
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
          </Form.Group>
          <Button onClick={clickJoinBtn}>入力</Button>
        </Col>
      </Form>
        <div>{displayRoom && displayRoom.id}</div>
    </>
  )
}

export default RoomIdInput
