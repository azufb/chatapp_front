import React, { useState } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Link, Router, useHistory } from "react-router-dom";
//import SignUp from "./SignUp";
import User from "./User";
/*import {
  BrowserRouter as Router,
  //Route,
  Switch
} from "react-router-dom";*/

const Login = () => {
  //const [username] = useState("");
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

  /*const clickGoToSignUpBtn = async () => {
    try {
      await User.signUp(username, email, password);
      history.push("/signup");
    } catch (e) {
      setErrMessage('不正な画面遷移');
    }
  }*/

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
        {/*<Router>
          <Switch>
            <Link to="/signup">初めての方はこちら</Link>
          </Switch>
        </Router>*/}
      </Row>
    </Container>
  );
};

export default Login;
