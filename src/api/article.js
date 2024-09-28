import axios from './axios'
 
const getArticle = slug=>{
    return axios.get(`/articles/${slug}`).then(res => res.data.article)
}
const postArticle = data=>{
    return axios.post('/articles',{article:data})
}
export default {
    getArticle,postArticle
}