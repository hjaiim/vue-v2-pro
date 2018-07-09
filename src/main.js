import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

/**
 * 引入自定义ui库
 */
import hjaiUI from './components/common/hjaiUI/index';
Vue.use(hjaiUI);

/**
 * 挂全局方法
 */
import * as g from './assets/jslib/global';
Vue.prototype.$g = g;
setWindowAttribute('g', g);

/**
 * 挂工具类方法
 */
import * as utils from 'hjai-utils/dist/utils.min.js';
Vue.prototype.utils = utils;
setWindowAttribute('utils', utils);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

/**
 * 挂载window(本地开发,方便测试数据)
 */
function setWindowAttribute($attr, $value)
{
  if (typeof $attr !== 'string' || typeof $value !== 'object')
  {
    throw new Error('参数类型不对!');//要不翻译成英语,显得专业一点?有时间再说
  }

  if (process.env.NODE_ENV === 'development')
  {
    window[$attr] = $value;
  }
}

