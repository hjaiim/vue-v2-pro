<template>
  <div class="wrapper">
    <div class="test-title">直接获得焦点(先点击后者input,弹起键盘,再把focus转移到前者的input)</div>
    <input type="tel" ref="inputTest" id="input">
    <input id="qs_bitch" type="tel" @click="test">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  beforeRouteEnter(to, from, next) {
    // do someting
    // 在渲染该组件的对应路由被 confirm 前调用
    console.log("组件钩子----beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // do someting
    // 在当前路由改变，但是依然渲染该组件是调用
    console.log("组件钩子----beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // do someting
    // 导航离开该组件的对应路由时被调用
    console.log("组件钩子----beforeRouteLeave");
    next();
  },
  created() {
    console.log("生命周期----created");
  },
  mounted() {
    console.log("生命周期----mounted");
  },
  updated() {
    console.log("生命周期----updated");
  },
  destroyed() {
    console.log("生命周期----destroyed");
  },
  data() {
    return {
      
    };
  },
  components: {},
  props: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      console.log("watch--------路由变化了");
    }
  },
  computed: {},
  methods: {
    
    test() {
      this.$refs.inputTest.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>