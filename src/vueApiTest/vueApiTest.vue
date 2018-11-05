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
    Partner
  }
};
</script>
<style type="text/css" lang="sass" rel="stylesheet/css">
@import '~css/test.scss';
</style>
