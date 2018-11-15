<template>
  <main-layout>
    <filter-test></filter-test>
    <Mixin-test></Mixin-test>
    <!-- 自动获得焦点 -->
    <input-test></input-test>
    <!-- nextTick -->
    <NextTick></NextTick>
    <!-- 键盘 -->
    <Keyboard></Keyboard>
    <!-- attra/listen -->
    <partner></partner>
    <!-- eventBus -->
    <partner-bus></partner-bus>
    <!-- render -->
    <render-test>
      <!-- <span name='test1'>我是父组件solt内容1</span> -->
      <span>我是父组件solt内容1</span>
      <span>我是父组件solt内容1</span>
      <!-- <div name='test2'>我是父组件solt内容2</div>
      <h3 name='test3'>我是父组件solt内容3</h3>
      <h3 name='test3'>我是父组件solt内容3</h3> -->
    </render-test>
  </main-layout>
</template>
<script type="text/ecmascript-6">
import MainLayout from "common/mainLayout";
import FilterTest from "./testApi/filters";
import MixinTest from "./testApi/mixin.vue";
import InputTest from "./testApi/input.vue";
import NextTick from "./testApi/nextTick.vue";
import Keyboard from "./testApi/keyboard.vue";
import Partner from "./testApi/attrs-listen/partner";
import PartnerBus from "./testApi/bus/partner";
import RenderTest from "./testApi/render";

export default {
  created() {},
  data() {
    return {};
  },
  components: {
    MainLayout,
    FilterTest,
    MixinTest,
    InputTest,
    NextTick,
    Keyboard,
    Partner,
    PartnerBus,
    RenderTest
  }
};
</script>
<style type="text/css" lang="sass" rel="stylesheet/css">
@import '~css/test.scss';
</style>
