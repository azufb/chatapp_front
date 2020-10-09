import React, {useContext} from 'react'
import { Button } from "react-bootstrap";
import {AuthContext} from '../../AuthService'

const ChatItem = ({content, createdAt, id, deleteMessage, imageUrl}) => {

  const deleteBtnClick =(e)=>{
    deleteMessage(e.target.id)
  }

  const time = Date.parse(createdAt)
  const moment = new Date(time)

  return (
    <li style={{listStyle:'none'}}>
      <div>
        {content}
      </div>
      <div>
        {imageUrl && <img style={{width:200,height:200}} src={`http://localhost:8000${imageUrl}`}/>}
      </div>
      <div>
        {moment.toLocaleString()}
      </div>
      <Button id={id} onClick={deleteBtnClick}>削除</Button>
    </li>
  )
}

export default ChatItem
