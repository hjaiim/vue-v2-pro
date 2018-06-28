/**
 * Created by haojun on 2018/5/31.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as g from '@/jslib/global';
Vue.use(VueRouter)

import Index from '../components/index/index.vue';
import Login from '../components/login/login.vue';
import QrCode from '../components/qrCode/qrCode.vue';
import FindCode from '../components/findCode/findCode.vue';

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
    },
    {
      path: '/qrcode',
      name: "我的二维码",
      component: QrCode,
      meta: {requireLogin: true}
    },
    {
      path: '/findcode',
      name: "查找二维码",
      component: FindCode,
      meta: {requireLogin: true}
    }
  ]
})

router.beforeEach((to, from, next) =>
{
  console.log('导航守卫--执行')
  console.log(to.fullPath.replace('/',''))
  if (to.meta.requireLogin)
  {
    if (g.utils.getSessionData('isLogin'))
    {//登录状态
      next();
    }
    else
    {//未登录,跳登录页,再回调当前页
      next({
        path: '/login',
        query: {redirect: to.fullPath.replace('/','')}
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
