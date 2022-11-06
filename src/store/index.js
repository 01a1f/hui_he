import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {

}

const mutations = {
    setToken(state,token){
        state.token = token
        localStorage.setItem('token',token)
        console.log('store,localstoreage保存token成功')
    },
    delToken(state){
        state.token = ''
        localStorage.removeItem('token')
    }
}

const state = {
    token:'',
    username:' '
}

const getters = {
    getToken(state){
        return state.token || localStorage.getItem('token')
    }
}

export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})