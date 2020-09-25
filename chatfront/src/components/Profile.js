import React,{useState,useContext} from 'react'
import { Card, Button, FormControl, Image, Form, Col } from "react-bootstrap";
import {AuthContext} from '../AuthService'
// import RUG from 'react-upload-gallery';
// import 'react-upload-gallery/dist/style.css';

import User from '../User'

const Profile = () => {
  const [image,setImage]= useState('')
  const [profileImage,setProfileImage]= useState('')
  const [changeName,setChangeName] = useState('')
  const {userToken,userName,setUserName,userIcon,setUserIcon} = useContext(AuthContext)

  /** username変更 */
  const saveName =(e)=>{
    e.preventDefault()
    if(!changeName){
      alert('入力されていません')
      return
    }
    setChangeName('')
    const data = {"name":changeName}
    fetch('http://localhost:8000/api/user/',{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        'authorization':'JWT' + ' ' + userToken
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    setUserName(changeName)
  }

  // 仮画像
  fetch('https://pixabay.com/api/?key=18372394-97cd741cc7c269ecc64b2c86f')
  .then((response)=>response.json()).then((response)=>setImage(response.hits[0].userImageURL))

 /** 画像変更 */
 const saveImage =(e)=>{
   e.preventDefault()
   if(!profileImage){
     alert('画像が選択されていません')
     return
   }
   setProfileImage('')
     const data = {"icon_base64":profileImage}
     fetch('http://localhost:8000/api/user/', {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
         'authorization':'JWT' + ' ' + userToken
       },
       body: JSON.stringify(data),
     })
     .then(response =>response.json())
   
   setUserIcon(profileImage)
 }

  const imageUp =(e)=>{
    const file = e.target.files[0];
    getBase64(file)
  }
  /** エンコード */
  const getBase64 = (file)=> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (()=> setProfileImage(reader.result.replace(/^data:\w+\/\w+;base64,/, '')))
  }

// 画像アップローダー検討
// const style = {
//     width: "100%",
//     margin: "0 auto",
// };
 
// const Sample = () => {    
//   return (
//       <RUG
//       action="/api/upload" // upload route
//       source={response => console.log(response.source)} // response image source
//       />
//   )
// }

  return (
    <div>
      <Card style={{ width: '25%' }}>
        <Image
          roundedCircle variant="top" 
          src={userIcon?`data:image/png;base64,${userIcon}`:image}
          style={{width:250,height:250,margin:'0 auto'}}
        />
        <Card.Body>
          <Card.Title style={{width:'30%',margin:'0 auto'}} class='font'>{userName}</Card.Title>
          <Col xs={9} >
            <Form.Label style={{fontWeight:'bold'}}>名前変更</Form.Label>
          </Col>
          <Form style={{margin:'0', display:'flex'}}>
            <Col xs={9} >
              <FormControl
                type="text"
                value={changeName}
                onChange={(e)=>{setChangeName(e.target.value)}}
                placeholder={userName}
              />
            </Col>
            <Button variant="outline-primary" onClick={saveName}>変更</Button>
          </Form>
          <Col xs={9} >
            <Form.Label style={{marginTop:20,fontWeight:'bold'}}>アイコン変更</Form.Label>
          </Col>
          <Form style={{margin:'0', display:'flex'}}>
            <Col xs={9} >
              <FormControl type='file' onChange={imageUp} />
            </Col>
            <Button variant="outline-primary" onClick={saveImage}>変更</Button>
          {/* <div style={style}>
            {Sample()}
          </div> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile

