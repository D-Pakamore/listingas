import Layount from '../components/global/Layout';
import MessageBoard from '../components/MessageBoard';
import axios from 'axios';
import SignIn from '../components/SignIn';
import jwt_decode from "jwt-decode";
import Router from "next/router";
// api
import { loginUserRequest, createUserMessageRequest, deleteUserMessageRequest } from './api/home';

export default function Home({ data, status, message }) {

  const loginUser = async (event) => {
    event.preventDefault();
    const tmpData = new FormData(event.currentTarget);
    //getting user inputs
    const username = tmpData.get('username')
    const password = tmpData.get('password')

    const response = await loginUserRequest(username, password);

    //if username and password exist
    if (response.status > 199 && response.status < 401) {
      const { data } = response;
      const accesToken = data.access;

      //decoding auth token to get user info
      const userObject = jwt_decode(accesToken);
      const userName = userObject.username;
      const userId = userObject.user_id;

      //setting cookies in user browser
      document.cookie = `token=${accesToken}`;
      document.cookie = `user=${userName}`;
      document.cookie = `id=${userId}`;
      Router.reload();

    } else {console.log(response)} 
  };

  if (status == 200) {
    return (
      <Layount>
        <MessageBoard
          deleteUserMessageRequest={deleteUserMessageRequest}
          createUserMessageRequest={createUserMessageRequest}
          messageData={data}>
        </MessageBoard>
      </Layount>
    )
  } else {
    return (
      <Layount sx={{ backgroundColor: 'red' }}>
        <h2 style={{ margin: '20px auto 0 auto', textAlign: 'center' }}>{message}</h2>
        <SignIn loginUser={loginUser} />
      </Layount>
    )
  }

}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token
  let message = 'Please Log In'
  const header = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const response = await axios.get('http://127.0.0.1:8000/information', header
  ).catch((res) => {
    if (res.response.status === 401) {
      // message = 'Please check your password and username'
    }
  })

  const { status } = response != undefined ? response : { status: 404 }
  const { data } = response != undefined ? response : { data: null }
  return {
    props: {
      data: data,
      status: status,
      message: message,
    },
  }
}