import Box from '@mui/material/Box';
import StandardImageList from './StandartImageList';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import Router from 'next/router'

const mainWrapperStyles = (pageYOffset) => {
    return {
        width: '90vw',
        maxWidth: '1000px',
        padding: '10px',
        position: "absolute",
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto 0 auto',
        top: `${pageYOffset + 100}px`,
        left: '50%',
        transform: 'translate(-50%)',
        backgroundColor: 'rgba(54, 69, 79, 0.2)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    }
}

const SpotlightGallery = ({ showGallery, closeOpenGallery}) => {
    const { imageData, pageYOffset } = showGallery
    const [spotlightImage, setSpotlightImage] = useState(imageData[0])
    // lifted state from child component for image files
    const [ imageDataLifted, setImageDataLifted] = useState(showGallery.imageData)

    const selectImage = (id) => {
        imageData.forEach(imageObject => {
            if (imageObject.id == id) {
                setSpotlightImage(imageObject)
            }
        })
    }

    const confirmImageOrder = () => {
        closeOpenGallery(imageDataLifted)
        Router.reload()
    }

    return (
        <Box sx={() => mainWrapperStyles(pageYOffset)}>
            <div style={{ width: '100%', textAlign: 'end' }}>
                <CheckIcon sx={{ cursor: 'pointer', marginRight: '10px' }} onClick={confirmImageOrder} />
                <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => closeOpenGallery()} />
            </div>
            <div style={{ textAlign: "center" }}>
                <a href={spotlightImage.obverse_image} target="_blank">
                    <img
                        src={spotlightImage.image}
                        loading="lazy"
                        style={{ width: '25%', objectFit: 'contain' }}
                    />
                </a>
            </div>
            <hr style={{ width: '100%', height: '5px', backgroundColor: 'rgba(54, 69, 79, 0.2)' }}></hr>
            <div>
                <StandardImageList selectImage={selectImage} imageDataLifted={imageDataLifted} setImageDataLifted={setImageDataLifted} />
            </div>
        </Box>
    );
}

export default SpotlightGallery;