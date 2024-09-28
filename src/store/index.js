import { createStore } from 'vuex'

import auth from './auth'
import feed from './feed'
import article from './article'

const store = createStore({
   modules:{
    auth,feed,article
   }
})
export default store