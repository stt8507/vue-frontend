import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      auth: false,
      token: ''
    },
    getters:{
      auth: state => {
        return state.auth
      },
      token: state => {
        return state.token
      },
    },
    mutations: {
      // 將state設定為參數
      SetAuth(state) {
        state.auth = !state.auth
      },
      setToken(state, payload){
        state.token = payload;
      }
    }
})
export default store;