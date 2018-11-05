
<template>
  <div class="wrapper">
    用在父组件传递数据给子组件或者孙组件
    <child1 :p-child1="child1" :p-child2="child2" @test1="onTest1" @test2="onTest2">
    </child1>
  </div>
</template>

<script>
import Child1 from "./child1.vue";
export default {
  created() {},
  mounted() {},
  data() {
    return {
      child1: "child1",
      child2: "child2"
    };
  },
  components: {
    Child1
  },
  props: {},
  watch: {},
  computed: {},
  methods: {
    onTest1() {
      console.log("test1 running...");
    },
    onTest2() {
      console.log("test2 running");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>