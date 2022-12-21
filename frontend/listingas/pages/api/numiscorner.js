import { getUserData } from "../../components/myMethods";
import axios from "axios";


//user

//MessageBoard


// NumiscornerCoins

export const deleteCoinRequest = (id) => {
    const { headers } = getUserData()
  
  
    const response = axios({
        url: `http://127.0.0.1:8000/numiscorner_coins/${id}`,
        method: "DELETE",
        headers: headers,
    })
    .catch(response => response)

    return response
}

export const uploadCsvRequest = (file) => {
    const {token} = getUserData()

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
    }


    const response = axios({
        url: `http://127.0.0.1:8000/create_numiscorner_coin`,
        method: "POST",
        headers: headers,
        data: {
            data: file
        },
    }).catch(response => response)

    return response
} 

export const uploadImagesRequest = (coinId, files) => {
    const {token} = getUserData()
    const data = {'id': coinId, 'files': [...files]}

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
    }


    const response = axios({
        url: `http://127.0.0.1:8000/numiscorner_images/`,
        method: "POST",
        headers: headers,
        data: data
    }).catch(response => response)

    return response
}

export const getCoinImagesRequest = (coinId) => {
    const {token} = getUserData()
    const data = {'id': coinId}

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
    }

    const response = axios({
        url: `http://127.0.0.1:8000/numiscorner_coins/${coinId}`,
        method: "GET",
        headers: headers,
        // data: data

    }).catch(response => response)

    return response
}

export const changeImagesOrderRequest = (imagesData) => {
    let data = []
    const {token} = getUserData()
    
    imagesData.forEach(element => {
        if (element.moved) {
        data.push(element)
        }
    });
    console.log(data)

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
    }

    const response = axios({
        url: `http://127.0.0.1:8000/cheange_image_order`,
        method: "POST",
        headers: headers,
        data: {data: data}

    }).catch(response => response)

    return response
}