import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getUserData } from './myMethods';
import axios from 'axios';
import { createUserMessageRequest } from '../pages/api/api';

export default function MessageInput({ addMessage }) {

  const postMessage = async (event) => {
    event.preventDefault();
    const {id, user } = getUserData()
    //getting user message
    const tmpData = new FormData(event.currentTarget);
    const message = tmpData.get('message')
    
    const { data } = await createUserMessageRequest(message, id)
    addMessage(data)
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