<template>
  <div class="wrapper">
    eventBus,child给partner传值

  </div>
</template>

<script>
export default {
  created() {
    this.bus.$on("test2", message => {
      console.log(message);
    });
  },
  mounted() {
    let time = setTimeout(() => {
      this.bus.$emit("test1", "我是来自eventBus-test1的消息");
      clearTimeout(time);
    }, 2000);
  },
  data() {
    return {};
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {},
  destroyed() {
    this.bus.$off("test2");
  }
};
</script>
<style lang="scss" scoped>
</style>