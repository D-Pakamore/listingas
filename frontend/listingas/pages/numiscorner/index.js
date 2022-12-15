import Layount from '../../components/global/Layout'
import CollapsibleTable from '../../components/CollapsibleTable'
import StandardImageList from '../../components/StandartImageList';
import ToolBar from '../../components/ToolBar'
import axios from 'axios';
import { useState } from 'react';
import { infiniteScrollPagination, deleteItem, fileUploadHandle } from '../../components/myMethods';
import { deleteCoinRequest, uploadImagesRequest, getCoinImagesRequest } from '../api/api';
import { extractEventHandlers } from '@mui/base';


const filterItems = (searchString, dataSet) => {
  let result = []
  const keywords = searchString.split(" ")

  dataSet.forEach(object => {
    const values = Object.values(object).join(" ").toLowerCase();
    let searchMatch = true

    keywords.forEach(keyword => {
      if (!values.includes(keyword.toLowerCase())) {
        searchMatch = false
      }
    })

    searchMatch ? result.push(object) : null
  })

  return result
}

export default function Home({ data, status }) {
  const productsPerPage = 10
  const [allData, setAllData] = useState(data)
  const [displayedData, setDisplayedData] = useState(allData.slice(0, productsPerPage))
  const [loading, setLoading] = useState(false)
  const [showGallery, setShowGallery] = useState(false)

  // preventing search and pagination interferance
  let searchIsActive = false

  // if search is active, pagination must be inactive
  if (!searchIsActive) {
    infiniteScrollPagination(allData, displayedData, setDisplayedData, productsPerPage);
  }

  const deleteCoin = (id) => {
    const cleanData = deleteItem(id, allData)

    setAllData(cleanData)
    setDisplayedData(cleanData.slice(0, productsPerPage))
    const response = deleteCoinRequest(id)
  }

  const handleSearch = (e) => {
    const userInput = e.target.value
    const currentlyShownItems = displayedData.length

    if (userInput.includes(" ")) {
      const searchResult = filterItems(userInput, allData)

      setAllData(searchResult)
      setDisplayedData(searchResult.slice(0, currentlyShownItems))
    } else {
      setAllData(data)
      setDisplayedData(data.slice(0, 10))
    }
  }

  const addImages = (event, id) => {
    event.preventDefault()
    const files = event.target.files
    const acceptedFileTypes = ['png', 'jpg']
    const result = fileUploadHandle(files, id, acceptedFileTypes)

    if (result.succes) {
      const response = uploadImagesRequest(result.id, files)
      console.log(response)
      console.log('here')
    } else {
      console.log(result.message)
    }
  }

  const toggleShowGallery = (id, pageYOffset) => {
    let showGalleryProperties = {imageData: [], pageYOffset: pageYOffset}

    if (showGallery) {
      setShowGallery(false)

    } else {
      getCoinImagesRequest(id).then(response => {
        showGalleryProperties.imageData = response.data.image_set
        
        setShowGallery(showGalleryProperties)
      }).catch(response => response)
    }
  }



  if (status != 200) {
    return (
      <Layount>
        <h2 style={{ margin: '50px', textAlign: 'center' }}>You have to log in to see this page, status: {status}</h2>
      </Layount>
    )
  } else {
    return (
      <Layount loading={loading}>
        <ToolBar coinCount={allData.length} setLoading={setLoading} handleSearch={handleSearch}></ToolBar>
        <CollapsibleTable toggleShowGallery={toggleShowGallery} addImages={addImages} deleteCoin={deleteCoin} coinData={displayedData}></CollapsibleTable>
        {showGallery ? <StandardImageList showGallery={showGallery} /> : null}
      </Layount>
    )
  }
}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token
  let statusCode = null

  const { data } = await axios.get('http://127.0.0.1:8000/numiscorner_coins', {
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: (status) => {

      statusCode = status
      return status < 500
    }
  })



  return {
    props: {
      data: data,
      status: statusCode
    },
  }
}