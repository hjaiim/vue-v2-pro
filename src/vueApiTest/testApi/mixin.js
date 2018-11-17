const minxin = {
  methods: {
    matchNum(str) {
      return str.match(/\d/g); //   匹配字符串中的数字
    }
  }
}

export default minxin;

/**
 * 1.定义全局minxin
 * 2.在main.js中全局注册
 * 3.在mixin.vue中使用
 */

//Vue.mixin() 可以把你创建的自定义方法混入所有的 Vue 实例

//因为我们的自定义方法会在所有的实例中混入，如果按照以前的方法，
//难免会有覆盖原先的方法的危险，按照官方的建议，混入的自定义方法名增加前缀 $_ 用作区分。