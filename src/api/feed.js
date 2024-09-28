import axios from "./axios"
import {getItem} from '../utils/index'
const getFeed = apiUrl =>{
    const token = getItem('accessToken')
    const authToken = token?`Token ${token}`:''
    const headers = {
        'Authorization': authToken,
      };
    return axios.get(apiUrl,{headers})
}

const getTags = () =>{
    return axios.get('/tags')
}

export default {getFeed,getTags}