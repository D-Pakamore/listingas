import Layount from '../components/Layout';
import Information from '../components/MessageBoard';
import axios from 'axios';
import SignIn from '../components/SignIn';

export default function Home({data, status, message}) {
  if (status == 200) {
    return (
      <Layount>
        <Information messages={data}></Information>
      </Layount>
    )
  } else {
    return (
      <Layount sx={{ backgroundColor: 'red' }}>
        <h2 style={{margin:'20px auto 0 auto', textAlign:'center'}}>{message}</h2>
        <SignIn/>
      </Layount>
    )
  }

}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token
  let message = 'Please Log In'
  const header = {
    headers: {Authorization: `Bearer ${token}`}
  }

  const response = await axios.get('http://127.0.0.1:8000/information', header
  ).catch((res) => {
    if (res.response.status === 401) {
      // message = 'Please check your password and username'
    }
  })

  const {status} = response != undefined ? response : {status: 404}
  const {data} = response != undefined ? response : {data: null}

  return {
    props: {
      data: data,
      status: status,
      message: message,
    },
  }
}