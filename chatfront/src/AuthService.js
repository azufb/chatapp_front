import React,{useState,createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
  const [userToken,setUserToken] = useState("")
  const [userName,setUserName] = useState("")
  const [userIcon,setUserIcon] = useState("")
  const [roomId, setRoomId] = useState("");
  const [currentRoomId, setCurrentRoomId] = useState("");

  return(
    <AuthContext.Provider
      value={{
        userToken,setUserToken,userName,setUserName,userIcon,setUserIcon,roomId, setRoomId,
        currentRoomId, setCurrentRoomId
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}