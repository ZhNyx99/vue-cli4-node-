import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '@/components/indexWrap.vue'
import searchPage from "../components/searchPage";
import cateList from "../components/cateList";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'indexWrap',
    component:indexWrap
  },
  {
    path:'/searchPage',
    name:'indexWrap',
    component:searchPage
  },
  {
    path:'/cateList',
    name:'cateList',
    component:cateList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
