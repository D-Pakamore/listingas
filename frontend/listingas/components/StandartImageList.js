import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const imageListStyles = (pageYOffset) => {
  return {
    height: '95vh',
    width: '95vw',
    position: "absolute",
    top: `${pageYOffset + 150}px`,
    // right: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }
}

function StandardImageList({ showGallery }) {
  const {imageData , pageYOffset} = showGallery

  return (
    <ImageList sx={() => imageListStyles(pageYOffset)} cols={3} rowHeight={164}>
      {imageData.map((item) => (
        <ImageListItem sx={{ flexDirection: 'row' }} key={item.coin}>
          <img
            src={item.obverse_image}
            alt={item.title}
            loading="lazy"
            style={{width:'200px', height: '200px', objectFit: 'contain'}}
          />
          <img
            src={item.reverse_image}
            alt={item.title}
            loading="lazy"
            style={{width:'200px', height: '200px', objectFit: 'contain'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList