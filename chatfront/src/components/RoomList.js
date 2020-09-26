import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import axios from 'axios'

const RoomList = () => {
  const [rooms,setRooms] = useState([])
  const [searchRoom,setSearchRoom] = useState('')
  const [displayRoom,setDisplayRoom] = useState([])
  const { userToken } = useContext(AuthContext)
  
  useEffect(() => {
    (async()=>{
      const fetchData =  await axios.get('http://localhost:8000/api/rooms/?limit=100', {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'JWT' + ' ' + userToken
                }
              })
      setRooms(fetchData.data.results)
    })()
  }, [])

  // 何故かfetchでgetできない為一旦axios
    // fetch('http://localhost:8000/api/rooms/?limit=100',{
    //   method:"GET",
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'authorization':'JWT' + ' ' + userToken
    //   },
    // }).then((response)=>{response.json()})
    // .then((data)=>{
    //  console.log(data);//undefined
    // })
  
    const roomSearch =(e)=>{
      e.preventDefault()
      setSearchRoom('')
      const resultRoom = rooms.find((room)=>room.id === searchRoom)
      setDisplayRoom(resultRoom)
    }

  return (
    <>
    <div>
      <label>ルーム検索</label>
      <form>
        <input type='text' value={searchRoom} onChange={(e)=>{setSearchRoom(e.target.value)}}/>
        <button onClick={roomSearch}>検索</button>
      </form>
    </div>
    <div>{displayRoom && displayRoom.id}</div>
    </>
  )
}

export default RoomList