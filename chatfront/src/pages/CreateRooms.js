import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";

export default function createRooms() {
    /*const [room, setRoom] = useState([{name: "", id: ""}]);
    const [input, setInput] = useState("");
    const [roomInput, setRoomInput] = useState([]);*/

    // 作成されたルームは配列に格納


    // if文またはswitch文で、ルームidを比較して一致するページを表示する

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
                                //setInput(e.target.value);
                            }}
                            //value={name}
                        />
                    </Form.Group>
                    <Button variant="primary" type="button">
                        ルーム作成
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}