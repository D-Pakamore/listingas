import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getUserData } from './myMethods';
import axios from 'axios';

export default function MessageForm({addMessage}) {
  const postMessage = async (event) => {
    event.preventDefault();
    const tmpData = new FormData(event.currentTarget);
    const userData = getUserData()
    const token = userData.token
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer ${token}`,
    }
  
    //getting user details
    const user_id = userData.id
    const username = userData.user
    const message = tmpData.get('message')

    try {
      await axios({
        url: "http://127.0.0.1:8000/information/",
        method: "POST",
        headers: headers,
        data: {
          message: message,
          user: user_id,
        },
      })
      .then((response) => {
        //if username and password exist
        if (response.status > 199 && response.status < 400) {
          const { data } = response;
          addMessage(data)

        }
      })
    } catch (response_2) {
      console.log(response_2);
    }
  }

  return (
    <Container maxWidth="lg" disableGutters>
      <Box component="form" onSubmit={postMessage} noValidate sx={{ mt: 1, height: 'inherit' }}>
        <TextField
          sx={{ width: '80%', p: 0 }}
          required
          id="message"
          placeholder="Message..."
          name="message"
          autoFocus
          variant='filled'
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '20%', height: '56px' }}
          size='large'
        >
          Send
        </Button>
      </Box>
    </Container>
  )
}