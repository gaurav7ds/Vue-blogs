import feedApi from '../api/feed'

const feed = {
    namespaced: true,
    state() {
        return {
            data: null,
            isLoading:false,
            error:null,
            tags:null,
        }
    },
    mutations:{
        getFeedStart(state){
            state.isLoading=true
            state.data = null
        },
        getFeedSuccess(state,payload){
            state.isLoading=false
            state.data = payload
        },
        getFeedFailure(state,payload){
            state.isLoading=false
        },
        getTags(state,payload){
            state.tags=payload
        }
    },
    actions:{
        getFeed(context,{apiUrl}){
            return new Promise(resolve=>{
                context.commit('getFeedStart')
                feedApi.getFeed(apiUrl).then(res=>{
                    context.commit('getFeedSuccess',res.data)
                    resolve(res.data)
                }).catch(()=>context.commit('getFeedFailure'))
            })
        },
        getTags(context){
            return new Promise(resolve=>{
                feedApi.getTags().then(res=>{
                    context.commit('getTags',res.data.tags)
                })
            })
        }
    }
}

export default feed