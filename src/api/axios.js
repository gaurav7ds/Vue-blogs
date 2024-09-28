import axios from 'axios'
import {getItem} from '../utils/index'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use(config=>{
    const token = getItem('accessToken')
    const authToken = token?`Token ${token}`:''
    config.headers.Authorization = authToken
    console.log(config);
    return config
})

export default axios