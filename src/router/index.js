import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import comment from '@/components/comment'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/comment',
      name: 'comment',
      component: comment
    },{
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
