import React,{useEffect,useContext} from 'react'
import {AuthContext} from '../../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";


const ChatForm = ({message,setMessage,setImage ,imageUp,setMessages,messages}) => {

  const {currentRoomId,userToken} = useContext(AuthContext)

  const sock = new WebSocket(`ws://localhost:8000/ws/room/${currentRoomId}/`,[userToken]);
  const onFormSubmit =(e)=>{
    e.preventDefault()
    setMessage('')
    setImage('')
    sock.send(message)
  }
  
  sock.onopen = () => {
    console.log('ws opened');
  };

  sock.onmessage=(e)=>{
    const response = JSON.parse(e.data)
    setMessages([...messages,response])
  }


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
