import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Input } from '@mui/material';
import InfoSlide from './popups/InfoSlide';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ToolBar = ({ handleSearch, setLoading, coinCount, csvUpload }) => {
    const [updateMessage, setUpdateMessage] = React.useState(null)

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar sx={{ backgroundColor: 'grey', position: 'relative', maxHeight: '40px' }}>
                    <Toolbar sx={{ display: 'contents' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ marginLeft: '50px' }}>Total coins: {coinCount}</div>
                            <Input onChange={handleSearch} sx={{ backgroundColor: 'white', maxHeight: '20px', width: '50%', maxWidth: '350px' }} type='text' />
                            <div className='toolsWrapper' style={{ alignSelf: 'flex-start', marginRight: '50px' }}>
                                <Tooltip title="Upload File">
                                    <IconButton component='label' sx={{ padding: '2px' }}>
                                        <UploadFileIcon></UploadFileIcon>
                                        <Input onChange={(event) => csvUpload(event)} sx={{ display: 'none' }} type='file' />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {updateMessage != null ?
                <InfoSlide messageData={updateMessage} /> : ''
            }
        </>
    );

}

export default ToolBar