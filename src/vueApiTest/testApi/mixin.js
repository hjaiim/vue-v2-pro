
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
 * 2.在main.js中注册
 * 3.在mixin.vue中使用
 */