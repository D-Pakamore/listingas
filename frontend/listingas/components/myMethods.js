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

export const infiniteScrollPagination = (dataset, datasetSetter, showFromIndex, showToIndex) => {
    
    return (useEffect(function mount() {
        const infiniteScroll = () => {
            const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

            if (endOfPage) {
                showToIndex += 10
                datasetSetter(dataset.slice(showFromIndex, showToIndex))
            }
        }

        window.addEventListener("scroll", infiniteScroll);
    }))
}