import React,{useState,createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }
  const [userToken,setUserToken] = useLocalState('userToken')
  const [userName,setUserName] = useLocalState('userName')
  const [userIcon,setUserIcon] = useLocalState('userIcon')
  const [roomsToken,setRoomsToken] = useLocalState('roomsToken')

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