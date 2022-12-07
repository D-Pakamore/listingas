import * as React from 'react';
import Router from 'next/router'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ReplayCircleFilledTwoToneIcon from '@mui/icons-material/ReplayCircleFilledTwoTone';
import IconButton from '@mui/material/IconButton';

const InfoSlide = () => {
    const [successMessage, setsuccessMessage] = React.useState(null)
    return (
        <Stack sx={{ zIndex: '1', backgroundColor: '#c6e2e9', width: '100%', position: 'absolute'}}>
            <Alert sx={{width: '100%', justifyContent: 'center'}} severity="success">jums pavyko</Alert>
            <Alert sx={{width: '100%', justifyContent: 'center'}} severity="warning">
                total rows skipped: 69<br />
                skipped rows: 69
            </Alert>
            <IconButton onClick={()=> Router.reload()} component='label' sx={{ flexDirection:'column', fontSize: '14px', padding: '2px' }}>
                <p style={{margin:'0'}}>Click to refresh</p>
                <ReplayCircleFilledTwoToneIcon></ReplayCircleFilledTwoToneIcon>
            </IconButton>
        </Stack>
    )
}

export default InfoSlide;