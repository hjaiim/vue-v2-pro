import Vue from 'vue';
import App from './App';
import router from './router/index';

/**
 * 引入自定义ui库
 */
import hjaiUI from './components/common/hjaiUI/index'
Vue.use(hjaiUI);

/**
 * 挂全局方法
 */
import * as g from './jslib/global'
window.g = g;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
