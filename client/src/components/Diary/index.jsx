import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Diary = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);

  const [diary, setDiary] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/diary`)
    .then(({ data }) => {
      setDiary(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the Diary: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Diary"/>

      <Container>
        {diary && diary.length > 0 ? (
          diary.map((diaryDetail, i) => (
            <>
              <blockdiaryDetail>
                {diaryDetail.date}: "{diaryDetail.diaryDetail}" ~ {diaryDetail.writer}
              </blockdiaryDetail>

              {user && user.token ? (
                <Link to={`/diary/edit/${diaryDetail._id}`}>...edit...</Link>
              ) : null}
            </>
          ))
        ) : null}
      </Container>
    </>
  );
}
 
export default Diary;