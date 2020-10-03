import React from 'react'
import ChatForm from './ChatForm'
import ChatDisplay from './ChatDisplay'
import {AuthContext} from '../../AuthService'

const ChatApp = () => {

  const [message,setMessage]=useState("")
  const [image,setImage] = useState("")
  const {userToken,currentRoomId} = useContext(AuthContext)


  useEffect(()=>{
    (async()=>{
      try{
        const fetchData = fetch(`/api/rooms/${currentRoomId}/messages/`,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            'authorization':'JWT' + ' ' + userToken
          }
        })
        console.log(fetchData.json())
      }catch(e){}

    })()
  },[])

  return (
    <>
      <ChatForm/>
      <ChatDisplay />
    </>
  )
}

export default ChatApp
