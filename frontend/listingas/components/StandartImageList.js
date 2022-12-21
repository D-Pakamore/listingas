import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// styles
const imageListStyles = () => {
  return {
    height: '100px',
    width: '100%',
    padding: '5px',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // borderRadius: '16px',
    // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    // backdropFilter: 'blur(5px)',
    // border: '1px solid rgba(255, 255, 255, 0.3)',
  }
}

const imageListItemActive = () => {
  return {
    flexDirection: 'row',
    height: 'fit-content !important',
    cursor: 'grabbing'
  }
}

const imageListItemInactive = () => {
  return {
    flexDirection: 'row',
    height: 'fit-content !important',
    cursor: 'pointer'
  }
}

function StandardImageList({ imageDataLifted, setImageDataLifted, selectImage }) {
  const [swapImagesData, setSwapImagesData] = React.useState([])
  const [imageListItemIsActive, setImageListItemIsActive] = React.useState(false)

  const mousedownHandle = (event, imageObject) => {
    setImageListItemIsActive(true)
    event.preventDefault();
     
    let data = swapImagesData
    data.push(imageObject)
    setSwapImagesData(data)
  }

  const mouseupHandle = (event, imageObject) => {
    let data = swapImagesData
    data.push(imageObject)
    setSwapImagesData(data)

    const mouseDownImgIndex = imageDataLifted.findIndex(object => {
      return object.id === swapImagesData[0].id;
    });

    const mouseUpImgIndex = imageDataLifted.findIndex(object => {
      return object.id === swapImagesData[1].id;
    });

    let tmpImageData = imageDataLifted
    // set order property
    const draggedImageOrder = swapImagesData[0].order
    const droppedOnImageOrder = swapImagesData[1].order
    // swap objects places
    tmpImageData[mouseDownImgIndex].order = draggedImageOrder
    tmpImageData[mouseUpImgIndex].order = droppedOnImageOrder
    tmpImageData[mouseDownImgIndex] = swapImagesData[1]
    tmpImageData[mouseUpImgIndex] = swapImagesData[0]
    // add indicator that images has been moved
    tmpImageData[mouseDownImgIndex].moved = true
    tmpImageData[mouseUpImgIndex].moved = true
  
    setImageDataLifted(tmpImageData)
    console.log(imageDataLifted)

    //reset state after
    setSwapImagesData([])
    setImageListItemIsActive(false)
  }

  return (
    <ImageList sx={imageListStyles} cols={6}>
      {imageDataLifted.map((item) => (
        <ImageListItem sx={imageListItemIsActive ? imageListItemActive : imageListItemInactive}
         key={item.id}
         onClick={() => selectImage(item.id)}
         onMouseDown={(event) => {mousedownHandle(event, item)}}
         onMouseUp={(event) => {mouseupHandle(event, item)}}
         >
          <img
            src={item.obverse_image}
            alt={item.title}
            loading="lazy"
            style={{width:'50%', objectFit: 'contain'}}
          />
          <img
            src={item.reverse_image}
            alt={item.title}
            loading="lazy"
            style={{width:'50%', objectFit: 'contain'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList