/**
 * Created by haojun on 2018/5/31.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as g from 'jslib/global';
import * as utils from 'hjai-utils/dist/utils.min.js';
Vue.use(VueRouter)

import Index from '../components/index/index.vue';
import Login from '../components/login/login.vue';
// import QrCode from '../components/qrCode/qrCode.vue';
import FindCode from '../components/findCode/findCode.vue';
import Activity from '../components/activity/activity.vue';
import Vuex from '../components/vuexTest/vuexTest.vue';

import Layout from '../components/layout/layout.vue';
import Test from '@/vueApiTest/vueApiTest';

// 懒加载
/**
 *  更快的加载首页.
 * 方式1.component: resolve => require(['@/components/qrCode/qrCode.vue'], resolve)
 * 方式2:component: () =>import ('../components/qrCode/qrCode.vue')
 * 先import 组件 会导致懒加载的引入不生效
 */
// const QrcodeTest = resolve => require(['@/components/qrCode/qrCode.vue'], resolve);

let router = new VueRouter({
  // mode: 'history',
  routes: [{
      path: '/',
      name: "首页",
      component: Index,
      meta: {
        requireLogin: true
      },
      leaf: false,
      iconCls: 'iconfont icon-home', // 图标样式class
    },
    {
      path: '/login',
      name: "登录页",
      component: Login,
      meta: {
        requireLogin: false
      }
    },
    {
      path: '/qrcode',
      name: "我的二维码",
      beforeEnter: (to, from, next) => {
        // do someting
        console.log('路由独享钩子----beforEnter');
        next();
      },
      // component: QrcodeTest,
      component: () =>
        import ('../components/qrCode/qrCode.vue'),
      meta: {
        requireLogin: false
      }
    },
    {
      path: '/findcode',
      name: "查找二维码",
      component: FindCode,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/activity',
      name: "活动管理",
      component: Activity,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/vuex',
      name: "vuex",
      component: Vuex,
      meta: {
        requireLogin: false
      }
    },
    {
      path: '/layout',
      name: "layout",
      component: Layout,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/test',
      name: "test",
      component: Test,
      meta: {
        requireLogin: false
      }
    }
  ]
})

// 全局钩子函数,在跳转之前执行
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫(钩子)----beforeEach');
  if (to.meta.requireLogin) {
    if (utils.data.getData('isLogin')) { // 登录状态
      next();
    } else { // 未登录,跳登录页,再回调当前页
      next({
        path: '/login',
        query: getQuery(to.fullPath)
      })
    }
  } else {
    if (to.path === '/login') {
      if (utils.data.getData('isLogin')) { // 防止手动输入login,默认跳首页
        next('/');
      } else {
        next();
      }
    } else {
      next();
    }
  }
})

router.afterEach((to, from) => {
  // do someting
  console.log('全局后置钩子----afterEach');
});

export default router

/**
 * 1.去掉路由带的'/'
 * 2.如果是默认页面,则不需要'redirect'
 * @param path
 */
function getQuery(path) {
  let queryObj = {};
  if (path != '/') {
    queryObj['redirect'] = path.replace('/', '');
  }
  return queryObj;
}
