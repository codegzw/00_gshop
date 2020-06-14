import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/msite' },
    {path: '/msite',component: Msite,meta:{showFooter:true} },
    {path:'/order',component:Order,meta:{showFooter:true} },
    {path:'/profile',component:Profile,meta:{showFooter:true} },
    {path:'/search',component:Search,meta:{showFooter:true} },
    {path:'/login',component:Login},
    
  ]
})
