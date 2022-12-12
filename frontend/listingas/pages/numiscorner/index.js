import Layount from '../../components/global/Layout'
import CollapsibleTable from '../../components/CollapsibleTable'
import ToolBar from '../../components/ToolBar'
import axios from 'axios';
import { useState } from 'react';
import { infiniteScrollPagination, deleteItem } from '../../components/myMethods';
import { deleteCoinRequest } from '../api/api';

const filterItems = (searchString, dataSet) => {
  let result = []
  const keywords = searchString.split(" ")
  console.log(keywords)

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

export default function Home({data, status}) {
  const productsPerPage = 10
  const [allData, setAllData] = useState(data)
  const [displayedData, setDisplayedData] = useState(allData.slice(0, productsPerPage))
  const [loading, setLoading] = useState(false)

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



  if (status != 200) {
    return (
      <Layount>
        <h2 style={{margin: '50px', textAlign: 'center'}}>You have to log in to see this page, status: {status}</h2>
      </Layount>
    )
  } else {
    return (
      <Layount loading={loading}>
        <ToolBar setLoading={setLoading} handleSearch={handleSearch}></ToolBar>
        <CollapsibleTable deleteCoin={deleteCoin} coinData={displayedData}></CollapsibleTable>
      </Layount>
    )
  }
}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token
  let statusCode = null

    const {data} = await axios.get('http://127.0.0.1:8000/numiscorner_coins', {
      headers: {Authorization: `Bearer ${token}`},
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