import React,{useState,createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
  const [userToken,setUserToken] = useState("")
  const [userName,setUserName] = useState("")
  const [userIcon,setUserIcon] = useState("")
  const [roomsToken,setRoomsToken] = useState("")

  return(
    <AuthContext.Provider
      value={{
        userToken,setUserToken,userName,setUserName,userIcon,setUserIcon,setRoomsToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}