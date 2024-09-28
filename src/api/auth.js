import axios from "./axios"
import {getItem} from '../utils/index'
const regester = credentials=>{
    return axios.post('/users',{user:credentials})
}
const login = credentials=>{
    return axios.post('/users/login',{user:credentials})
}
const getUser = ()=>{
    const token = getItem('accessToken')
    const authToken = token?`Token ${token}`:''
    const headers = {
        'Authorization': authToken,
      };
    return axios.get('/user',{headers:headers})
}
export default {
    regester,login,getUser
}