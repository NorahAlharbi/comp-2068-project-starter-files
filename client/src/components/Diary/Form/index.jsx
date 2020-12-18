import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import {GlobalStoreContext} from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const DiaryDetailForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Diary was updated successfully"
        });
      }

      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the Diary: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/diary"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        name="diaryDetail" 
        placeholder="diaryDetail"
        defaultValue={inputs.diaryDetail}
      />
      <input 
        onChange={handleChange} 
        name="date" 
        placeholder="YYYY-MM-DD"
        defaultValue={inputs.date}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
 
export default DiaryDetailForm;