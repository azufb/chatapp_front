import React,{useContext, useState} from 'react'
import {AuthContext} from '../../AuthService'
import { Button, FormControl, Form, Col } from "react-bootstrap";

const ChatForm = () => {
  const [message,setMessage]=useState("")
  const [image,setImage] = useState("")
  const { userToken } = useContext(AuthContext)

  const onFormSubmit = async ()=>{
    try{
      let data 
      if(image){
        data={
          "room_id": "string",
          "content": message,
          "image_base64": "string"
        }
      }else{
        data={
          "room_id": "string",
          "content": message,
          "image_base64": "string"
        }
      }
      await fetch("http://localhost:8000/api/messages",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
        body:JSON.stringify(data)
      }).json()
    }catch(e){}
  }
  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Form.Row>
          <Col xs={5}>
            <FormControl
              as="textarea"
              rows="5"
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
            />
          </Col>
          </Form.Row>
        <Button>送信</Button>
      </Form>
    </div>
  )
}

export default ChatForm
