<template>
  <div class="wrapper">
     <p>子组件in child1:</p>
     <p>props: {{pChild1}}</p>
     <p>$attrs: {{$attrs}}</p>
    <hr>
     
    <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
     
    <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
    <!--  <child2 v-bind="$attrs" v-on="$listeners"></child2> -->
     </div>
</template>

<script>
import Child2 from "./child2.vue";
export default {
  created() {},
  mounted() {
    this.$emit("test1");
  },
  data() {
    return {};
  },
  // inheritAttrs: false,
  components: { Child2 },
  props: ["pChild1"],
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>