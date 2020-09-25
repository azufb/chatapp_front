import React, { useState,useContext } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {AuthContext} from '../AuthService'

const SignUp = () => {
  const { register, handleSubmit, errors, control, getValues } = useForm();
  const history = useHistory();
  const {setUserName,setUserToken} = useContext(AuthContext)

  const onSubmit = async (data) => {
    setUserName(data.username)
    try{
      const fetchData = { email:data.email,password:data.password };
      const response = await fetch('http://localhost:8000/api/register/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fetchData),
      })
      const responseJson = await response.json()
        setUserToken(responseJson.token);
        setUserName(data.username)
        history.push('/home')
    }catch(e){
      console.log(e)
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
              <Controller
                name="username"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                }}
                as={<Form.Control
                type="text"
                name='username'
                ref={register({required: true})}
                />}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              {errors?.email?.type === "required" && <span className='errMsg'>※必須</span>}
              <Controller
                name="email"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                }}
                as={<Form.Control type='text'
                name='email'/>}
              />
                {errors?.email?.type === "pattern" && <p className='errMsg'>メールアドレスの書式に誤りがあります。</p>}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              {errors?.password?.type === "required" && <span className='errMsg'>※必須</span>}
              {errors?.password?.type === "minLength" && <span className='errMsg'>6文字以上</span>}
              <Controller
                name="password"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  minLength: 6
                }}
                as={<Form.Control name="password" type="password"/>}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>確認用パスワード</Form.Label>
              {errors?.password?.type === "required" && <span className='errMsg'>※必須</span>}
              {errors?.password?.type === "minLength" && <span className='errMsg'>6文字以上</span>}
              <Controller
                name="confirmPassword"
                defaultValue=""
                control={control}
                rules={{
                  required: { required: true, minLength: 6 },
                  validate: value => {
                   if (value === getValues().password) {
                      return true;
                    } else {
                      return "パスワードが一致しません";
                    }
                  }
                }}
                as={
                  <Form.Control
                    type="password"
                    name='confirmPassword'
                  />}
                  />
                  {errors.confirmPassword && <p className='errMsg'> {errors.confirmPassword.message}</p>}
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
  