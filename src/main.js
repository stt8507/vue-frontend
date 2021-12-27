import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import './assets/all.css'
import store from './store/index.js'
import axios from 'axios'

// http request 攔截器
axios.interceptors.request.use(
  
  config => {
    
    if (localStorage.getItem('token') != null) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log('axios:' + error.response.status);
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/',
            query: {redirect: router.currentRoute.fullPath}
          });
      }
    }
    return Promise.reject(error.response);  
  }
);

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  store : store,
  render: h => h(App),
  router
}).$mount('#app')




