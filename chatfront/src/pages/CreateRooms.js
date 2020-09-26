import React, { useState, useContext } from "react";
import { Form, FormControl, Button, Container, Row } from "react-bootstrap";
import { AuthContext } from '../AuthService';
import axios from "axios";

const CreateRooms = () => {
    const [id, setId] = useState("");
    const [icon_base64, setRoomImage] = useState("");

    //const {setRoomsToken}  = useContext(AuthContext)

    let createRoomsBtn = new URLSearchParams();
    URLSearchParams.append(
        {
            'text':id,
            'file': icon_base64
        }
    );

    axios.post('http://localhost:8000/api/rooms/', createRoomsBtn)
        .then(response => {
            console.log(id);
        }).catch(error => {
            console.log(error);
        }
    
    const roomImage = (e) => {
        const file = e.target.files[0];
        getBase64(file);
    }

    const getBase64 = (file)=> {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (()=> setRoomImage(reader.result.replace(/^data:\w+\/\w+;base64,/, '')))
    }
    
    
    return (
        <Container className="center">
            <Row className="justify-content-md-center">
                <Form>
                    {/*errMessage && <Alert variant="danger">{errMessage}</Alert>*/}
                    <p>
                        <b>ルーム作成</b>
                    </p>
                    <Form.Group controlId="name">
                        <Form.Label>ルーム名</Form.Label>
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
                            onChange={(e) => {
                            setRoomImage(e.target.value);
                         }} 
                         onChange={roomimage} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createRoomsBtn}>
                        ルーム作成
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default CreateRooms;