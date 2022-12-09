import { getUserData } from "../../components/myMethods";
import axios from "axios";


//user

export const loginUser = (username, password) => {
    const {headers} = getUserData()

    const response = axios({
        url: "http://127.0.0.1:8000/user_auth/token/",
        method: "POST",
        headers: headers,
        data: {
          username: username,
          password: password,
        },
    })
    .catch(response => response);

    return response
}

//MessageBoard
export const deleteUserMessageRequest = (messageId) => {
    const { headers } = getUserData()

    const response = axios({
        url: `http://127.0.0.1:8000/information/${messageId}`,
        method: "DELETE",
        headers: headers,
    })
        .then((response) => {
            if (response.status > 200 && response.status < 400) {
                return response
            }
        })
        .catch(response => response)
    
    return response     
};

export const createUserMessageRequest = (message, id) => {
    const { headers } = getUserData()

    const response = axios({
        url: "http://127.0.0.1:8000/information/",
        method: "POST",
        headers: headers,
        data: {
        message: message,
        user: id,
        },
    })
    .then((response) => {
        if (response.status > 199 && response.status < 400) {
            return response
        }
    })
    .catch(response => response)

    return response
}

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