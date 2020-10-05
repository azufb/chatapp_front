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
      <Form >
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
          <FormControl type='file' onChange={imageUp}/>
        <Button onClick={onFormSubmit}>送信</Button>
      </Form>
    </div>
  )
}

export default ChatForm
