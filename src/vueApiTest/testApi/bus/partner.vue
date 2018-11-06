<template>
    <div class="wrapper">
        <child></child>
    </div>
</template>

<script>
import Child from "./child.vue";
import Child2 from "./child2.vue";
export default {
  created() {
    this.bus.$on("test1", message => {
      console.log(message);
    });
  },
  mounted() {
    let time = setTimeout(() => {
      this.bus.$emit("test2", "我是来自eventBus-test2的消息");
      clearTimeout(time);
    }, 2000);
  },
  data() {
    return {};
  },
  components: { Child, Child2 },
  props: {},
  watch: {},
  computed: {},
  methods: {},
  destroyed() {
    this.bus.$off("test1");
  }
};
</script>
<style lang="scss" scoped>
</style>