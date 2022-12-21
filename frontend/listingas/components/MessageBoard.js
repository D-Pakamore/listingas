import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MessageInput from './MessageInput';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { getUserData } from './myMethods';
import Box from '@mui/material/Box';

const MessageBoard = ({ messageData, deleteUserMessageRequest, createUserMessageRequest}) => {
  const [messages, setMessages] = React.useState(messageData)

  //functions
  const addMessage = (event) => {
    event.preventDefault();
    let cleanMessages = [...messages]

    const tmpData = new FormData(event.currentTarget);
    const userMessage = tmpData.get('message')
    const {id, user } = getUserData()


    createUserMessageRequest(userMessage, id).then(response => {
      const {data} = response
      cleanMessages.push(data)
      setMessages(cleanMessages)

    }).catch(response => console.log(response))
  }

  async function deleteMessage(deletedMessageId){
    let cleanMessages = []

    messages.map((message) => {
      if (message.id != deletedMessageId) {
        cleanMessages.push(message)
      }
    })
    setMessages(cleanMessages)

    const res = await deleteUserMessageRequest(deletedMessageId)
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
            {messages.map((message) => (
              <TableRow
                key={message.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {message.username}
                </TableCell>
                <TableCell align="right">{message.message}
                  <IconButton variant="contained" onClick={() => deleteMessage(message.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* callback funkcija -> funkcija peduodama vaikui ten iškviečiama ir gražina tėviniam responsa */}
      <MessageInput addMessage={addMessage} />
    </Box>
  );
}

export default MessageBoard;