import React,{useEffect} from 'react'
import { Button, FormControl, Form, Col } from "react-bootstrap";

const ChatForm = ({addMessage,message,setMessage,setImage ,imageUp}) => {


  const onFormSubmit =(e)=>{
    e.preventDefault()
    addMessage()
    setMessage('')
    setImage('')
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
