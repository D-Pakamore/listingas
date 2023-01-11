import Layount from '../../components/global/Layout'
import CollapsibleTable from '../../components/CollapsibleTable'
import SpotlightGallery from '../../components/SpotlightGallery';
import ToolBar from '../../components/ToolBar'
import LoadingSpinner from '../../components/LoadingSpinner';
import InfoSlide from '../../components/popups/InfoSlide';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { infiniteScrollPagination, deleteItem, fileUploadHandle } from '../../components/myMethods';
import { deleteCoinRequest, uploadImagesRequest, getCoinImagesRequest, uploadCsvRequest, changeImagesOrderRequest, nextPageDataRequest, getAllCoinsRequest } from '../api/numiscorner';


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

export default function Home({ data, nextPage, previousPage, count, status }) {
  const [allData, setAllData] = useState(data)
  const [dataCount, setDataCount] = useState(count)
  const [nextPageEndpoint, setNextPageEndpoint] = useState(nextPage)
  const [searchData, setSearchData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [infoMessage, setInfoMessage] = useState(null)

  const pagination = async () => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    if (endOfPage && searchData === null) {
      setLoading(true)
      const { data } = await nextPageDataRequest(nextPageEndpoint)
      const { count, next, previous, results } = data
      const newData = [...allData, ...results]

      setAllData(newData)
      setDataCount(count)
      setNextPageEndpoint(next)

      setLoading(false)
    }
  }

  const handleSetSearchData = async () => {
    const { data } = await getAllCoinsRequest()
    const { results } = data
    setSearchData(results)
  }

  const clearSearchData = () => {
    setSearchData(null)
    setAllData(data)
  }

  useEffect(() => {
    window.addEventListener("scroll", pagination);

    return () => window.removeEventListener("scroll", pagination);
  })

  const deleteCoin = (id) => {
    const cleanData = deleteItem(id, allData)

    setAllData(cleanData)
    const response = deleteCoinRequest(id)
  }

  const csvUpload = async (event) => {
    event.preventDefault()

    try {
      var file = event.target.files[0]
      var extension = file.name.split('.')[1]
    } catch {
      // no file chosen
      return
    }

    if (extension === 'csv') {
      setLoading(true)
      const response = await uploadCsvRequest(file)

      const { data } = response

      setLoading(false)
      setInfoMessage(data)


    } else {
      console.log(`Please choose csv file, you have chosen: ${extension}`)
    }

  }

  const handleSearch = async (e) => {
    const userInput = e.target.value

    if (userInput.includes(" ")) {
      const searchResult = filterItems(userInput, searchData)

      setAllData(searchResult)
    }
  }

  const addImages = (event, id) => {
    event.preventDefault()
    const files = event.target.files
    const acceptedFileTypes = ['png', 'jpg']
    const result = fileUploadHandle(files, id, acceptedFileTypes)

    if (result.succes) {
      const response = uploadImagesRequest(result.id, files)
    } else {
      console.log(result.message)
    }
  }

  const toggleShowGallery = (id, pageYOffset) => {
    let showGalleryProperties = { imageData: [], pageYOffset: pageYOffset }

    if (showGallery) {
      setShowGallery(false)

    } else {
      getCoinImagesRequest(id).then(response => {
        showGalleryProperties.imageData = response.data.image_set

        setShowGallery(showGalleryProperties)
      }).catch(response => response)
    }
  }

  const closeOpenGallery = (saveChanges = false) => {
    setShowGallery(false)

    if (saveChanges) {
      const response = changeImagesOrderRequest(saveChanges)
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
      <Layount>
        {loading ? <LoadingSpinner /> : null}
        <ToolBar
          coinCount={dataCount}
          handleSearch={handleSearch}
          csvUpload={csvUpload}
          setLoading={setLoading}
          handleSetSearchData={handleSetSearchData}
          clearSearchData={clearSearchData}
        />
        {infoMessage ?
          <InfoSlide
            infoMessage={infoMessage}
          />
          : null}
        <CollapsibleTable
          toggleShowGallery={toggleShowGallery}
          addImages={addImages}
          deleteCoin={deleteCoin}
          coinData={allData}
        />
        {showGallery ?
          <SpotlightGallery
            showGallery={showGallery}
            closeOpenGallery={closeOpenGallery}
          />
          : null}
      </Layount>
    )
  }
}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token

  const response = await axios.get('http://127.0.0.1:8000/numiscorner_coins', {
    headers: { Authorization: `Bearer ${token}` },
  }).catch(res => {
    const data = {}
    const { response } = res

    data.statusText = response.statusText
    data.count = null
    data.next = null
    data.previous = null
    data.results = null

    return { data: data, status: response.status }
  })

  console.log(response)

  const { count, next, previous, results } = response.data
  const { status } = response

  return {
    props: {
      data: results,
      nextPage: next,
      previousPage: previous,
      count: count,
      status: status
    },
  }
}