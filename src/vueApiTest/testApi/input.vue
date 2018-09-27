<template>
  <div class="wrapper">
    <div class="test-title">直接获得焦点9</div>
    <!-- <input type="text" autofocus="autofocus" ref="inputTest"> -->
    <input type="text" v-focus>
    </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.$nextTick(() => {
        this.$refs.input.focus()
    })
  },
  data() {
    return {};
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>