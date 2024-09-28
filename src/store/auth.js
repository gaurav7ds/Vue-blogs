import authApi from '../api/auth'

import { setItem} from '../utils'

const auth = {
    namespaced: true,
    state() {
        return {
            isSubmitting: false,
            isLoggedIn:null,
            isLoading:false,
            currentUser:null,
            validationErrors:null,
        }
    },
    getters: {
        getSubmitting(state) {
            return state.isSubmitting
        },
        hasErrors(state){
            if(state.validationErrors){
                return true
            }else{
                return false
            }
        },
        errors(state){
            return state.validationErrors
        }
    },
    mutations: {
        regesterStart(state) {
            state.isSubmitting = true
            state.validationErrors=null
        },
        regesterSuccess(state,payload) {
            state.isSubmitting = false
            state.isLoggedIn=true
            state.currentUser=payload
        },
        regesterFailure(state,payload) {
            state.isSubmitting = false
            state.validationErrors=payload
        },
        loginStart(state) {
            state.isSubmitting = true
            state.validationErrors=null
        },
        loginSuccess(state,payload) {
            state.isSubmitting = false
            state.isLoggedIn=true
            state.currentUser=payload
        },
        loginFailure(state,payload) {
            state.isSubmitting = false
            state.validationErrors=payload
        },
        getUserStart(state){
            state.isLoading=true
        },
        getUserSuccess(state,payload){
            state.isLoading=false
            state.isLoggedIn=true
            state.currentUser=payload
        },
        getUserFailure(state){
            state.isLoading=false
            state.isLoggedIn=false
            state.currentUser=null
        }
    },
    actions: {
        regester(context, payload) {
            return new Promise(resolve => {
                context.commit('regesterStart')
                authApi.regester(payload).then(res => {
                    setItem('accessToken',res.data.user.token)
                    context.commit('regesterSuccess',res.data.user)
                    resolve(res.data.user)
                }).catch(err => {
                    context.commit('regesterFailure',err.response.data.errors)
                })
            })
        },
        login(context,payload){
            return new Promise(resolve => {
                context.commit('loginStart')
                authApi.login(payload).then(res => {
                    setItem('accessToken',res.data.user.token)
                    context.commit('loginSuccess',res.data.user)
                    resolve(res.data.user)
                }).catch(err => {
                    context.commit('loginFailure',err.response.data.errors)
                })
            })
        },
        getUser(context){
            return new Promise(resolve => {
                context.commit('getUserStart')
                authApi.getUser().then(res => {
                    context.commit('getUserSuccess',res.data.user)
                    resolve(res.data.user)
                }).catch(err => {
                    context.commit('getUserFailure')
                })
            })
        }
    }
}

export default auth