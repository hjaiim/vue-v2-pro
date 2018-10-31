/**
 * Created by haojun on 2018/4/26.
 */
import Loading from './Loading/Loading.vue';
import Toast from './Toast/Toast.vue';
import Keyboard from './Keyboard/Keyboard.vue';

const install = function (Vue) {
  Vue.component('Loading', Loading);
  Vue.component('Toast', Toast);
  Vue.component('Keyboard', Keyboard);
}

export default {
  install,
  Loading,
  Toast
}

/**
 * 插件
 * 如果是个对象,必须提供install 方法
 * 如果是个函数,会被直接当成install函数执行.
 * install 函数传参数,默认第一个参数为vue,其后参数为注册组件的arguments.
 *
 */