export const getUserData = () => {
    
    const cookie = document.cookie
    const cookieObject = Object.fromEntries(cookie.split(';').map(item => item.split('=').map(arr => arr.trim())))

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${cookieObject.token}`,
    }

    let result = {...cookieObject}
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