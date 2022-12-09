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
  const [coinData, setCoinData] = useState(data)

  // data handling with pagination
  let firstItem = 0
  let lastItem = 10
  const [showItems, setShowItems] = useState(coinData.slice(firstItem,lastItem))
  infiniteScrollPagination(coinData, setShowItems, firstItem, lastItem);

  const deleteCoin = (id) => {
    // state managment
    const cleanData = deleteItem(id, coinData)
    setCoinData(cleanData)
    setShowItems(cleanData.slice(firstItem, lastItem))

    //request managment
    const response = deleteCoinRequest(id)
  }

  const handleSearch = (e) => {
    const userInput = e.target.value
  
    if (userInput.includes(" ")) {
      const searchResult = filterItems(userInput, coinData)
      setShowItems(searchResult)
      //disables pagination duo to bug if left while search is active
      // window.removeEventListener("scroll");
    } else {
      setShowItems(coinData.slice(firstItem, lastItem))
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
      <Layount>
        <ToolBar handleSearch={handleSearch}></ToolBar>
        <CollapsibleTable deleteCoin={deleteCoin} coinData={showItems}></CollapsibleTable>
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