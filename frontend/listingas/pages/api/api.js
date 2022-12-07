import { getUserData } from "../../components/myMethods";
import axios from "axios";

export const deleteUserMessageRequest = (messageId) => {
    const userData = getUserData()
    const { headers } = userData

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
    const userData = getUserData()
    const { headers } = userData

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