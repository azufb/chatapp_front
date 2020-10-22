import React,{useState,useContext} from 'react'
import {AuthContext} from '../AuthService'
import { Button, FormControl, Form } from "react-bootstrap";


const UsersSearch = () => {
  const [id,setId] = useState('')
  const [userContext,setUserContext] = useState([])
  const {userToken} = useContext(AuthContext)
  
  const handleClick =(e)=>{
    e.preventDefault()
    fetch(`http://localhost:8000/api/users/${id}/`,{
      method:"GET",
      headers:{
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + userToken
        },
      }).then((response)=>response.json())
      .then((data)=>{
        setUserContext([...userContext,data])
        setId('')
      })
  }
  return (
    <div>
    <Form onSubmit={handleClick}>
      <Form.Label>ユーザー検索</Form.Label>
      <FormControl value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <Button>入力</Button>
      <Button onClick={()=>{setUserContext([])}}>クリア</Button>
    </Form>
    {userContext.length > 0 &&
    userContext.map((user)=>{
      return (
        <div>
            <Form.Label>name</Form.Label>
            {user.name}
            <img src={`http://localhost:8000${user.icon_url}`}/>
        </div>
      )
    })
    }
</div>
  )
}

export default UsersSearch
