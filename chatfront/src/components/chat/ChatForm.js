import React,{useEffect,useContext} from 'react'
import {AuthContext} from '../../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";


const ChatForm = ({addMessage,message,setMessage,setImage ,imageUp}) => {

  const {currentRoomId,userToken} = useContext(AuthContext)

  const onFormSubmit =(e)=>{
    e.preventDefault()
    addMessage()
    setMessage('')
    setImage('')
  }
  
  useEffect(()=>{
    const sock = new WebSocket(`ws://localhost:8000/ws/room/${currentRoomId}/`,[userToken]);
    sock.onopen = () => {
      console.log('ws opened');
      sock.send(message)
    };

     return () => {
      console.log('ws closed');
      sock.close();
    }
  },[message])


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
