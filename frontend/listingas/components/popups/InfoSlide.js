import * as React from 'react';
import Router from 'next/router'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ReplayCircleFilledTwoToneIcon from '@mui/icons-material/ReplayCircleFilledTwoTone';
import IconButton from '@mui/material/IconButton';

//message data must contain keys: message: (string), type: (srting)
const InfoSlide = ({ infoMessage }) => {
    return (
        <Stack sx={{zIndex: '1', backgroundColor: '#c6e2e9', width: '100%', position: 'absolute', overflow: 'hidden'}}>
            {
                infoMessage.type == 'success' ?
                <Alert sx={{width: '100%', justifyContent: 'center'}} severity="success">{infoMessage.message}</Alert>
                :
                <Alert sx={{width: '100%', justifyContent: 'center'}} severity="warning">{infoMessage.message}</Alert>
            }
            <IconButton onClick={()=> Router.reload()} component='label' sx={{ flexDirection:'column', fontSize: '14px', padding: '2px' }}>
                <p style={{margin:'0'}}>Click to refresh</p>
                <ReplayCircleFilledTwoToneIcon></ReplayCircleFilledTwoToneIcon>
            </IconButton>
        </Stack>
    )
}

export default InfoSlide;