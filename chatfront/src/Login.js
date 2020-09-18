import React, { useState } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import User from "./User";
//import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const history = useHistory();

  const clickLoginBtn = async () => {
    try {
      await User.login(email, password);

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
            <b>ログイン</b>
          </p>
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
          <Button variant="primary" type="button" onClick={clickLoginBtn}>
            ログイン
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
