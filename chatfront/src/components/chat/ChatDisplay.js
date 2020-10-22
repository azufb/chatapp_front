import React from 'react'
import ChatItem from './ChatItem'

const ChatDisplay = ({messages,deleteMessage}) => (
  <>
  {messages.map((message)=>{
    return(
      <ul key={message.id}>
        <ChatItem 
          content={message.content}
          createdAt={message.created_at}
          id={message.id}
          imageUrl={message.image_url}
          deleteMessage={deleteMessage}
        />
      </ul>
    )
  })}
  </>
)

export default ChatDisplay

