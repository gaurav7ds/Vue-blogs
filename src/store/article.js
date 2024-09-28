import articleApi from '../api/article'

const article = {
    namespaced: true,
    state() {
        return {
            data: null,
            isLoading:false,
            error:null,
        }
    },
    mutations:{
        getArticleStart(state){
            state.isLoading=true
            state.data = null
        },
        getArticleSuccess(state,payload){
            state.isLoading=false
            state.data = payload
        },
        getArticleFailure(state,payload){
            state.isLoading=false
        },
        getTags(state,payload){
            state.tags=payload
        }
    },
    actions:{
        getArticle(context,{slug}){
            return new Promise(resolve=>{
                context.commit('getArticleStart')
                articleApi.getArticle(slug).then(article=>{
                    context.commit('getArticleSuccess',article)
                    resolve(article)
                }).catch(()=>context.commit('getArticleFailure'))
            })
        },
        postArticle(context,{data}){
            return new Promise(resovle=>{
                articleApi.postArticle(data).then(res=>{
                    console.log(res);
                })
            })
        }
    }
}

export default article