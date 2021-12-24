import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Member from '../components/Member.vue'
import MemberEdit from '../components/MemberEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/MemberEdit',
    name: 'MemberEdit',
    component: MemberEdit
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
]

const router = new VueRouter({
  routes
})

export default router
