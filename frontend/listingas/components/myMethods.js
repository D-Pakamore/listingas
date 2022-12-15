import { useEffect } from "react"

export const getUserData = () => {

    const cookie = document.cookie
    const cookieObject = Object.fromEntries(cookie.split(';').map(item => item.split('=').map(arr => arr.trim())))

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${cookieObject.token}`,
    }

    let result = { ...cookieObject }
    result.headers = headers

    return result
}

// when managing state deletes an item from dataSet by given id
export const deleteItem = (id, dataSet) => {
    let result = []

    dataSet.forEach(data => {
        if (data.id != id) {
            result.push(data)
        }
    })

    return result
}

export const infiniteScrollPagination = (allData, currentlyShownData, setCurrentlyShownData, showItemsBy) => {
    
    return (useEffect(function mount() {
        const infiniteScroll = () => {
            const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
            if (endOfPage) {
                let shownDataLength = currentlyShownData.length
                shownDataLength += showItemsBy
                setCurrentlyShownData(allData.slice(0, shownDataLength))
            }
        }
        window.addEventListener("scroll", infiniteScroll);
    }))
}

export const fileUploadHandle = (files, coinId = null, fileTypesArr = ['png', 'jpg']) => {
    let result = {id: coinId, files: [], succes: true, message: 'succes'}
    let fileExtensions = []
    let filesFound = []

    //collecting file extensions
    for (let i = 0; i < files.length; i++) {
      fileExtensions.push(...files.item(i).name.toLowerCase().split('.').slice(-1))
      filesFound.push(files.item(i))
    }

    // checking if user chose correct files
    fileExtensions.forEach(extension => {
      if (!fileTypesArr.includes(extension)) {
        result.succes = false
        result.message = `incorrect file types, specified types: ${fileTypesArr}, found file: ${extension}`
      }
    })

    if (result.succes) {
        result.files = files
        result.coinId = coinId
        result.files = filesFound
    }

    return result
  }