import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header  title="Welcome To your Diary please login!!!">
        <p>
          <i>Here you can write your dairy secretly and can access it in any time you want!!!</i>
        </p>
      </Header>
      
      <Container>
        <p>
          Please put your <ins>email</ins> and your <ins>password</ins>:
        </p>
        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;