import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Member from '../components/Member.vue'
import MemberEdit from '../components/MemberEdit.vue'
import Manage from '../components/Manage.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/memberEdit',
    name: 'memberEdit',
    component: MemberEdit
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && localStorage.getItem('token') == null){
    next({name: 'login'})
  }else{
    next();
  }
})

export default router
