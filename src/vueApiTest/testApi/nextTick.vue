<template>
    <div class="wrapper">
        <div ref="message">{{message}}</div>
        <button @click="handleClick">点击</button>
        <input ref="input" v-show="inputShow">
        <button @click="show">show</button>
    </div>
</template>

<script>
export default {
  created() {},
  mounted() {},
  data() {
    return {
      message: "begin",
      inputShow: false
    };
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {
    handleClick() {
      this.message = "end";
      console.log(this.$refs.message.innerText); //打印“begin”
    },
    show() {
      this.inputShow = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
