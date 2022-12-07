import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MessageForm from './MessageInput';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { getUserData } from './myMethods';
import Box from '@mui/material/Box';

export default function Information({ messages }) {
  const [messagesState, setMessagesState] = React.useState(messages)

  const addMessage = (newMessage) => {
    const cleanMessages = [...messagesState]
    cleanMessages.push(newMessage)
    setMessagesState(cleanMessages)
  }

  const deleteMessage = (deletedMessageId) => {
    let cleanMessages = []

    messagesState.map((message) => {
      if (message.id != deletedMessageId) {
        cleanMessages.push(message)
      }
    })

    setMessagesState(cleanMessages)
  };

  const deleteRequest = (messageId) => {
    const userData = getUserData()
    const { headers } = userData

    axios({
      url: `http://127.0.0.1:8000/information/${messageId}`,
      method: "DELETE",
      headers: headers,
    })
    .then((response) => {
      if (response.status > 200 && response.status < 400) {
        deleteMessage(messageId)
      }
    })
    .catch(responseErr => console.log(responseErr))
  };

  return (
    <Box sx={{ backgroundColor: '#F9F6EE', width: '364px' }}>
      <TableContainer sx={{ maxHeight: '300px', backgroundColor: 'rgba(255,255,255,0.9)', maxWidth: '500px', marginTop: '10px' }} component={Paper}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messagesState.map((message) => (
              <TableRow
                key={message.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {message.username}
                </TableCell>
                <TableCell align="right">{message.message}
                  <IconButton variant="contained" onClick={() => deleteRequest(message.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MessageForm addMessage={addMessage} sx={{ backgroundColor: 'red' }} />
    </Box>
  );
}