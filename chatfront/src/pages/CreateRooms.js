import React, { useState, useContext } from "react";
import { Form, FormControl, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from '../AuthService';
import axios from "axios";
import {useHistory} from 'react-router-dom'

const CreateRooms = () => {
    const [icon_base64, setRoomImage] = useState("");
    const [id, setId] = useState('')
    const { userToken,setRoomsToken }  = useContext(AuthContext)
    const history = useHistory()

    const createRoomsBtn = async () => {
        if(!id){
            alert('ルーム名を入力してください')
        }else if(!icon_base64){
            alert('ルームアイコンを選択して下さい')
        }else{
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'JWT' + ' ' + userToken
            }
            const data ={id,icon_base64}
            await axios.post('http://localhost:8000/api/rooms/', data, {
                headers: headers
            })
        }
    };
    
    const imageUp =(e)=>{
        const file = e.target.files[0];
        getBase64(file)
    }
    const getBase64 = (file)=> {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (()=> setRoomImage(reader.result.replace(/^data:\w+\/\w+;base64,/, '')))
    }
    
    console.log(icon_base64);
    
    return (
        <Container>
            <Row>
                <Form>
                    {/*errMessage && <Alert variant="danger">{errMessage}</Alert>*/}
                    <p>
                        <b>ルーム作成</b>
                    </p>
                    <Col xs={8}>
                        <Form.Group controlId="name">
                            <Form.Label>ルームID</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setId(e.target.value);
                                }}
                                value={id}
                            />
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>アイコン画像</Form.Label>
                            <FormControl 
                                type='file' 
                                onChange={imageUp}
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={createRoomsBtn}>
                            ルーム作成
                        </Button>
                    </Col>
                </Form>
            </Row>
        </Container>
    )
}

export default CreateRooms;
