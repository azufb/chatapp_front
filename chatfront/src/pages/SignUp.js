import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import User from "../User";

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
      await User.signUp(username, email, password);
      history.push("/list1");
    } catch (e) {
      console.log(e);
    }
  };   

    return (
      <Container>
        <Form.Row className="justify-content-md-center" style={{marginTop:'100px'}}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <b>サインアップ</b>
            </p>
            <Form.Group controlId="username">
              <Form.Label>ユーザー名</Form.Label>
              {errors.username && <span className='errMsg'>※必須</span>}
              <Form.Control
                type="text"
                name='username'
                value={username}
                onChange={(e)=>{setUserName(e.target.value)}}
                ref={register({required: true})}
                />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              {errors?.email?.type === "required" && <span className='errMsg'>※必須</span>}
              <Form.Control
                type='text'
                name='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                ref={register({
                   required: true,
                   pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
                })}
                />
                {errors?.email?.type === "pattern" && <span className='errMsg'>メールアドレスの書式に誤りがあります。</span>}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              {errors?.password?.type === "required" && <span className='errMsg'>※必須</span>}
              {errors?.password?.type === "minLength" && <span className='errMsg'>6文字以上</span>}
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
              {errors?.confirmPassword?.type === "required" && <span className='errMsg'>※必須</span>}
              {errors?.confirmPassword?.type === "minLength" && <span className='errMsg'>6文字以上</span>}
              <Form.Control
                type="password"
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                ref={register({ required: true, minLength: 6 })}
                />
                <span style={{color:'#ff6347'}}>{message}</span>
            </Form.Group>
            <Button variant="primary" type='submit'>
              サインアップ
            </Button>
          </Form>
        </Form.Row>
      </Container>
    );
};
  
  export default SignUp;
  