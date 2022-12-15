import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Input } from '@mui/material';
import InfoSlide from './popups/InfoSlide';
import { uploadCsvRequest } from '../pages/api/api';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ToolBar = ({handleSearch, setLoading, coinCount}) => {
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

    const uploadRequest = async (file) => {
        //nav loading spinner
        setLoading(true)
        const response = uploadCsvRequest(file)
        response.then(response => {
            setUpdateMessage(response.data)
            //nav loading spinner
            setLoading(false)
        }).catch(response => 
            console.log(response),
            setLoading(false)
        )  
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar sx={{ backgroundColor: 'grey', position: 'relative', maxHeight: '40px'}}>
                    <Toolbar sx={{ display: 'contents' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{marginLeft: '50px'}}>Total coins: {coinCount}</div>
                            <Input onChange={handleSearch} sx={{ backgroundColor: 'white', maxHeight: '20px' , width: '50%', maxWidth: '350px' }} type='text' />
                            <div className='toolsWrapper' style={{alignSelf: 'flex-start', marginRight: '50px'}}>
                                <Tooltip title="Upload File">
                                    <IconButton component='label' sx={{ padding: '2px' }}>
                                        <UploadFileIcon></UploadFileIcon>
                                        <Input onChange={fileUploadHandle} sx={{ display: 'none' }} type='file' />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {updateMessage != null ?
                <InfoSlide messageData={updateMessage}/> : ''
            }
        </>
    );

}

export default ToolBar