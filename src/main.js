import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import './assets/all.css'
import store from './store/index.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store : store,
  render: h => h(App),
  router
}).$mount('#app')




