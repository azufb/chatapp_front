import React,{useState,useContext,useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatDisplay from './ChatDisplay'
import {AuthContext} from '../../AuthService'

const ChatApp = () => {

  const [messages,setMessages]=useState([])
  const [message,setMessage]=useState("")
  const [image,setImage] = useState("")
  const {userToken,currentRoomId} = useContext(AuthContext)

  // message取得
  useEffect(()=>{
    (async()=>{
      try{
        const fetchData = await fetch(`http://localhost:8000/api/rooms/${currentRoomId}/messages/?from_id=0`,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            'authorization':'JWT' + ' ' + userToken
          }
        })
        const messageData = await fetchData.json()
        setMessages(messageData.results)
      }catch(e){}
    })()
  },[currentRoomId,message])
  console.log(messages);

  /** 画像選択 */
  const imageUp =(e)=>{
    const file = e.target.files[0];
    getBase64(file)
  }

  /** エンコード */
  const getBase64 = (file)=> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (()=> setImage(reader.result.replace(/^data:\w+\/\w+;base64,/, '')))
  }

  /** message送信 */
    const addMessage = async ()=>{
    try{
      let data 
      if(!message){
        alert('入力してください')
        return
      }else if(!image){
        data={
          "room_id": currentRoomId,
          "content": message,
        }
      }else{
        data={
          "room_id": currentRoomId,
          "content": message,
          "image_base64": image
        }
      }
      const fetchData = await fetch("http://localhost:8000/api/messages/",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
        body:JSON.stringify(data)
      })
      fetchData.json()
    }catch(e){}
  }

  const deleteMessage =(id)=>{
    setMessages(messages.filter((message)=>String(message.id) !== id))
  }

  return (
    <>
      <ChatForm
        addMessage={addMessage}
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
        image={image}
        setImage={setImage}
        imageUp={imageUp}
      />
      <ChatDisplay messages={messages} deleteMessage={deleteMessage}/>
    </>
  )
}

export default ChatApp
