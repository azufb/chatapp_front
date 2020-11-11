import React,{useEffect,useContext,useState} from 'react'
import {AuthContext} from '../../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";


const ChatForm = ({message,setMessage,setImage ,imageUp,setMessages,messages}) => {

  const {currentRoomId,userToken} = useContext(AuthContext)
  const [sock,setSock] = useState()

  useEffect(()=>{
    if(currentRoomId&&userToken){
      const ws = new WebSocket(`ws://localhost:8000/ws/room/${currentRoomId}/`,[userToken]);
      setSock(ws)
    }
  },[currentRoomId,userToken])

  const onFormSubmit =(e)=>{
    e.preventDefault()
    setMessage('')
    setImage('')
    if(sock) {
      sock.send(message)
      sock.onmessage = ((message) => {
        const response = JSON.parse(message.data)
        setMessages([...messages,response])
      })
    }
  }

  useEffect(()=>{
   if(sock){
     sock.onopen = () => {
        console.log("open");
      };
      
   }
 }, [sock])


  return (
    <div>
      <p>
        <b>チャット</b>
      </p>
      <Form>
        <Form.Row>
          <Form.Group controlId="name">
            <FormControl
              as="textarea"
              rows="5"
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="name">
          <FormControl type='file' onChange={imageUp}/>
          <Button onClick={onFormSubmit}>送信</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default ChatForm
