import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Diary">
        Your Diary
      </Header>

      <Container>
        <Form endpoint="diary"/>
      </Container>
    </>
  );
}
 
export default New;