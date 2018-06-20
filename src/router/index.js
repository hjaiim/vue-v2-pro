/**
 * Created by haojun on 2018/5/31.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as g from '@/jslib/global';
Vue.use(VueRouter)

import Index from '../components/index/index.vue';
import Login from '../components/login/login.vue';

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "首页",
      component: Index,
      meta: {requireLogin: true}
    },
    {
      path: '/login',
      name: "登录页",
      component: Login,
      meta: {requireLogin: false}
    }
  ]
})

router.beforeEach((to, from, next) =>
{
  console.log('导航守卫--执行')
  if (to.meta.requireLogin)
  {
    if (g.utils.getSessionData('isLogin'))
    {//登录状态
      next();
    }
    else
    {//未登录,跳登录,再回调当前页
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else
  {
    if (to.path === '/login')
    {
      if (g.utils.getSessionData('isLogin'))
      {//防止手动输入login,默认跳首页
        next('/');
      }
      else
      {
        next();
      }
    }
    else
    {
      next();
    }
  }
})

export default router
