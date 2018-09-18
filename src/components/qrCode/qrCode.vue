<template>
  <main-layout>
    <div>我的二维码
      <!--不足10k,解析base64,打包到index.js-->
      <img src="@/assets/logo.png" alt="">
      <!--大图片,assets目录下,跑本地,也会打包到static/img目录下,还会更改图片命名-->
      <img style='width: 200px' src="@/assets/img/test3.jpg" alt="">
      <img style='width: 200px' src="~img/test3.jpg" alt="">
      <img style='width: 200px' src="img/test3.jpg" alt="">
    </div>
    <div>购买二维码
      <img src="static/img/logo.png" alt="">
      <div class="test-img">css图片</div>
    </div>
    <div>
    </div>
    <test @click.native="test"></test>
  </main-layout>
</template>
<script type="text/ecmascript-6">
import MainLayout from "common/mainLayout";
import Test from "./test.vue";
export default {
  created() {
    
    
  },
  data() {
    return {};
  },
  components: {
    MainLayout,
    Test
  },
  watch: {},
  methods: {
    test() {
      this.$message("hhh");
    }
  }
};
</script>
<style type="text/css" lang="scss" rel="stylesheet/css" scoped>
@import "~css/qrCode.scss";
</style>
