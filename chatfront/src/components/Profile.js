// 名前変更処理
// 画像アップロード
// できたらアップローダー導入
import React,{useState,useEffect} from 'react'
import { Card, Button, FormControl, Image, Form } from "react-bootstrap";
// import RUG from 'react-upload-gallery';
// import 'react-upload-gallery/dist/style.css';

import User from '../User'

const Profile = () => {
  const [image,setImage]= useState('')
  const [profileImage,setProfileImage]= useState('')
  const [userName,setUserName] = useState(window.localStorage.username)
  const [changeName,setChangeName] = useState('')

  // 仮画像
  fetch('https://pixabay.com/api/?key=18372394-97cd741cc7c269ecc64b2c86f')
  .then((response)=>response.json()).then((response)=>setImage(response.hits[0].userImageURL))

  const imageUp =(e)=>{
    const file = e.target.files[0];
    getBase64(file)
  }

  /** 画像変更 */
  const saveImage =(e)=>{
    e.preventDefault()
      const data = {"name":userName,"icon_base64":profileImage}
      fetch('http://localhost:8000/api/user/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization':'JWT' + ' ' + window.localStorage.isLoggedIn
        },
        body: JSON.stringify(data),
      })
      .then(response =>response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
    });

  }

  /** username変更 */
  const saveName =(e)=>{
    console.log(changeName);
    e.preventDefault()
    setChangeName('')
    const data = {"name":changeName}
    fetch('http://localhost:8000/api/user/',{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        'authorization':'JWT' + ' ' + window.localStorage.isLoggedIn
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(data=>console.log(data))
  }

// toDataURLもgetBase64もデコードされたデータは同じ
//  const toDataURL =(url)=> {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = (()=> {
//     var reader = new FileReader();
//     reader.onloadend = (()=> setProfileImage(reader.result))
//     reader.readAsDataURL(xhr.response);
//   })
//   xhr.open('GET', url);
//   xhr.responseType = 'blob';
//   xhr.send();
// }

const getBase64=(file)=> {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (()=>setProfileImage(reader.result))
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

// 画像アップローダー検討
// const style = {
//     width: "10%",
//     margin: "0 auto",
//     marginTop: 150
//   };
 
// const Sample = () => {    
//     return (
//         <RUG
//         action="/api/upload" // upload route
//         source={response => response.source} // response image source
//         />
//     )
// }

  return (
    <div>
      {/* <div style={style}>
      {Sample()}
      </div> */}
      <Card style={{ width: '30%' }}>
        <Image roundedCircle variant="top" src={image} style={{width:300,height:300}}/>
        <Card.Body>
          <Card.Title>{window.localStorage.username}</Card.Title>
          <Form >
            <Form.Label>名前変更</Form.Label>
            <FormControl
              type="text"
              value={changeName}
              onChange={(e)=>{setChangeName(e.target.value)}}
              placeholder={window.localStorage.username}
            />
            <Button variant="outline-primary" onClick={saveName}>変更</Button>
          </Form>
          <form >
          <FormControl type='file' onChange={imageUp} />
          <Button variant="outline-primary" onClick={saveImage}>保存</Button>
          </form>
          <Card.Text>
            rooms
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile

