import React,{useEffect,useContext,useState} from 'react'
import {AuthContext} from '../../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";


const ChatForm = ({message,setMessage,setImage ,imageUp,setMessages,messages}) => {

  const {currentRoomId,userToken} = useContext(AuthContext)
  const [sock,setSock] = useState()

  useEffect(()=>{
    if(currentRoomId&&userToken){
      const ws = new WebSocket(`ws://localhost:8000/ws/room/${currentRoomId}/`,[userToken]);
      //話していた履歴を取得するにはルーム入った瞬間にgetリクエストをする
      //on~はイベント
      ws.onmessage = ((message) => {
        const response = JSON.parse(message.data)
        setMessages([...messages,response])
      })
     ws.onopen = () => {
        console.log("open");
      };
      setSock(ws)
    }
  },[currentRoomId,userToken,messages])

  const onFormSubmit =(e)=>{
    e.preventDefault()
    setMessage('')
    setImage('')
    if(sock) {
      sock.send(message)
    }
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
