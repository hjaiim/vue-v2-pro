/**
 * Created by haojun on 2018/4/26.
 */
import Loading from './Loading/Loading.vue';
import Toast from './Toast/Toast.vue';

const install = function (Vue)
{
  Vue.component('Loading', Loading);
  Vue.component('Toast', Toast);
}

export default {
  install,
  Loading,
  Toast
}
