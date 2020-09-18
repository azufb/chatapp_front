import React, { useState } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import User from "./User";

const SignUp = () => {
  const { register, handleSubmit,  errors } = useForm();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message,setMessage] = useState('')
  const history = useHistory();
  
  const onSubmit = async () => {
    if(password !== confirmPassword){
      setMessage('パスワードが一致しません')
      return
    }
    try {
      setUserName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      await User.signUp(username, email, password);
      history.push("/list1");
    } catch (e) {
      console.log(e);
    }
  };   

    return (
      <Container className="center">
        <Row className="justify-content-md-center">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <b>サインアップ</b>
            </p>
            <Form.Group controlId="username">
              <Form.Label>ユーザー名</Form.Label>
              {errors.username && <span>{errors.username.message}</span>}
              <Form.Control
                type="text"
                name='username'
                value={username}
                onChange={(e)=>{setUserName(e.target.value)}}
                ref={register({required: "※必須"})}
                />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              {errors.email && <span>{errors.email.message}</span>}
              <Form.Control
                type='text'
                name='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                ref={register({required: "※必須"})}
                />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              {errors.password?.type === "required" && "※必須"}
              {errors.password?.type === "minLength" && "6文字以上"}
              <Form.Control
                type="password"
                name='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                ref={register({ required: true, minLength: 6 })}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>確認用パスワード</Form.Label>
              {errors.confirmPassword?.type === "required" && "※必須"}
              {errors.confirmPassword?.type === "minLength" && "6文字以上"}
              <Form.Control
                type="password"
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                ref={register({ required: true, minLength: 6 })}
                />
                {message}
            </Form.Group>
            <Button variant="primary" type='submit'>
              サインアップ
            </Button>
          </Form>
        </Row>
      </Container>
    );
};
  
  export default SignUp;
  