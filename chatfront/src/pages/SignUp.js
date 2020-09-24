import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import User from "../User";

const SignUp = () => {
  const { register, handleSubmit, errors, control, getValues } = useForm();

  const history = useHistory();
  
  const onSubmit = async (data) => {
    try {
      await User.signUp(data.username, data.email, data.confirmPassword)
      history.push("/home");
    } catch (e) {
      console.log(e.json())//失敗しても通る エラーメッセージ欲しい
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
  