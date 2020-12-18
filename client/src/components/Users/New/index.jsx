import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Welcome to Your Diary!!">
        
      </Header>
      
      <Container>
        <p><i>Please register with us!!</i></p>

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;