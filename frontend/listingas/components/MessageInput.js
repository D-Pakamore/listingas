import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function MessageInput({ addMessage }) {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box component="form" onSubmit={(event) => addMessage(event)} noValidate sx={{ mt: 1, height: 'inherit' }}>
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