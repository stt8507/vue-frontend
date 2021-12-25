import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Member from '../components/Member.vue'
import MemberEdit from '../components/MemberEdit.vue'
import Manage from '../components/Manage.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
