import {createRouter , createWebHistory} from 'vue-router'
import GlobalFeed from '../views/GlobalFeed.vue'
import YourFeed from '../views/YourFeed.vue'
import TagFeed from '../views/TagFeed.vue'
import Regester from '../views/Regester.vue'
import Login from '../views/Login.vue'
import ArticleInfo from '../views/ArticleInfo.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'
import Settings from '../views/Settings.vue'

const routes = [
    {
        path:'/',
        name:'globalfeed',
        component:GlobalFeed
    },
    {
        path:'/regester',
        name:'regester',
        component:Regester
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/feed',
        name:'yourFeed',
        component:YourFeed
    },
    {
        path:'/tag/:slug',
        name:'tag',
        component:TagFeed
    },
    {
        path:'/articles/new',
        name:'createArticle',
        component:CreateArticle
    },
    {
        path:'/articles/:slug',
        name:'article',
        component:ArticleInfo
    },
    {
        path:'/articles/:slug/edit',
        name:'editArticle',
        component:EditArticle
    },
    {
        path:'/settings',
        name:'settings',
        component:Settings
    },
    {
        path:'/profiles/:slug',
        name:'userprofile',
        component:GlobalFeed
    },
    {
        path:'/profiles/:slug/favourites',
        name:'userProfileFavourites',
        component:GlobalFeed
    },

]

const router = createRouter({
    routes,
    history:createWebHistory(),
})

export default router