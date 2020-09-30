import React, { useState,useContext } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { AuthContext } from '../AuthService'
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { signupToken,userToken, setUserToken }  = useContext(AuthContext)

  const history = useHistory();

  const clickLoginBtn = async () => {
    await axios.post('http://localhost:8000/api/auth/user/', {
        email,
        password
      }).then((response) => {
        setUserToken(response.data.token)
        history.push('/home')
      })
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
        <button>
          <Link to='/signup'>初めての方はこちら!</Link>
        </button>
      </Row>
    </Container>
  );
};

export default Login;
