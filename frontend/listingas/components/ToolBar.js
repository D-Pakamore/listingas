import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Input } from '@mui/material';
import { useRef } from 'react';
import { getUserData } from './myMethods';
import axios from 'axios';
import Router from 'next/router'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ReplayCircleFilledTwoToneIcon from '@mui/icons-material/ReplayCircleFilledTwoTone';


const Nav = () => {
    const [updateMessage, setUpdateMessage] = React.useState(null)

    const fileUploadHandle = (e) => {
        e.preventDefault()

        try {
            var file = e.target.files[0]
            var extension = file.name.split('.')[1]
        } catch {
            // no file chosen
            return
        }

        if (extension === 'csv') {
            console.log('csv file accepted')
            uploadRequest(file)
        } else {
            console.log(`Please choose csv file, you have chosen: ${extension}`)
        }
    }

    const uploadRequest = (file) => {
        const userData = getUserData()
        const token = userData.token
        const headers = {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`,
        }

        axios({
            url: `http://127.0.0.1:8000/create_numiscorner_coin`,
            method: "POST",
            headers: headers,
            data: {
                data: file
            }
        }).then((response) => {
            //page does reload but console.log does not work after (need to store data to session then use it after reload)
            const { data } = response
            sessionStorage.setItem('csv_upload_res', data)
            setUpdateMessage(response)
        }).catch((response) => {
            console.log(response);
        })
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar sx={{ backgroundColor: 'grey', position: 'relative', maxHeight: '40px' }}>
                    <Toolbar sx={{ display: 'contents' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
                            <Tooltip title="Upload File">
                                <IconButton component='label' sx={{ padding: '2px' }}>
                                    <UploadFileIcon></UploadFileIcon>
                                    <Input onChange={fileUploadHandle} sx={{ display: 'none' }} type='file' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {updateMessage != null ?
                <Stack sx={{ zIndex: '1', backgroundColor: '#c6e2e9', width: '100%', position: 'absolute'}}>
                    <Alert sx={{width: '100%', justifyContent: 'center'}} severity="success">{updateMessage.data.message}</Alert>
                    <Alert sx={{width: '100%', justifyContent: 'center'}} severity="warning">
                        total rows skipped: {updateMessage.data.skipped_rows.length}<br />
                        skipped rows: {updateMessage.data.skipped_rows.join(', ')}
                    </Alert>
                    <IconButton onClick={()=> Router.reload()} component='label' sx={{ flexDirection:'column', fontSize: '14px', padding: '2px' }}>
                        <p style={{margin:'0'}}>Click to refresh</p>
                        <ReplayCircleFilledTwoToneIcon></ReplayCircleFilledTwoToneIcon>
                    </IconButton>
                </Stack> : ''
            }
        </>
    );

}

export default Nav