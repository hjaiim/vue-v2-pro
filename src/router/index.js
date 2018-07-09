/**
 * Created by haojun on 2018/5/31.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as g from 'jslib/global';
Vue.use(VueRouter)

import Index from '../components/index/index.vue';
import Login from '../components/login/login.vue';
import QrCode from '../components/qrCode/qrCode.vue';
import FindCode from '../components/findCode/findCode.vue';
import Activity from '../components/activity/activity.vue';
import Vuex from '../components/vuexTest/vuexTest.vue';

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
    },
    {
      path: '/activity',
      name: "活动管理",
      component: Activity,
      meta: {requireLogin: true}
    },
    {
      path: '/vuex',
      name: "vuex",
      component: Vuex,
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
    {//未登录,跳登录页,再回调当前页
      next({
        path: '/login',
        query: getQuery(to.fullPath)
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

/**
 * 1.去掉路由带的'/'
 * 2.如果是默认页面,则不需要'redirect'
 * @param path
 */
function getQuery(path)
{
  let queryObj = {};
  if (path != '/')
  {
    queryObj['redirect'] = path.replace('/', '');
  }
  return queryObj;
}
