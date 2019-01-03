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
      component: login,
      model:'history'
    },{
      path: '/register',
      name: 'register',
      component: register,
      model:'history'
    },{
      path: '/comment',
      name: 'comment',
      component: comment,
      model:'history'
    },{
      path: '/list',
      name: 'list',
      component: list,
      model:'history'
    }
  ]
})
