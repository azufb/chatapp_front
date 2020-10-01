import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import axios from 'axios'

const RoomList = () => {
  const [rooms,setRooms] = useState([])
  // const [searchRoom,setSearchRoom] = useState('')
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
      setDisplayRoom(fetchData.data.results)
    })()
  }, [])
  console.log(displayRoom);

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
  
    // room検索
    // const roomSearch =(e)=>{
    //   e.preventDefault()
    //   setSearchRoom('')
    //   const resultRoom = rooms.find((room)=>room.id === searchRoom)
    //   setDisplayRoom(resultRoom)
    // }

  return (
    <>
    <div>
      {/* <label>ルーム検索</label>
      <form>
        <input type='text' value={searchRoom} onChange={(e)=>{setSearchRoom(e.target.value)}}/>
        <button onClick={roomSearch}>検索</button>
      </form> */}
    </div>
    <label>ルーム一覧</label>
    <div>{displayRoom && displayRoom.map((room)=>{
      return(
        <ul style={{listStyle: 'none'}}>
          <li>
            <button style={{background:'none',border:'none'}}>{room.id}</button>
          </li>
        </ul>
      )
    })}</div>
    </>
  )
}

export default RoomList
