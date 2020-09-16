import React, { useState } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import User from "./User";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
  
    const history = useHistory();
  
    const clickSignUpBtn = async () => {
      try {
        await User.signUp(username, email, password);
  
        history.push("/list1");
      } catch (e) {
        setErrMessage("メールアドレスかパスワードが違います");
      }
    };
  
    return (
      <Container className="center">
        <Row className="justify-content-md-center">
          <Form>
            {errMessage && <Alert variant="danger">{errMessage}</Alert>}
            <p>
              <b>サインアップ</b>
            </p>
            <Form.Group controlId="username">
              <Form.Label>ユーザー名</Form.Label>
              <Form.Control
                type="username"
                placeholder="ユーザー名を入力してください"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                type="email"
                placeholder="メールアドレスを入力してください"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                type="password"
                placeholder="パスワードを入力してください"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={clickSignUpBtn}>
              サインアップ
            </Button>
          </Form>
        </Row>
      </Container>
    );
  };
  
  export default SignUp;
  