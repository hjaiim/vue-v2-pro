<template>
  <div class="wrapper">
    <p>孙子组件in child2:</p>
    <p>props: {{pChild2}}</p>
    <p>$attrs: {{$attrs}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.$emit("test2");
  },
  data() {
    return {};
  },
  components: {},
  props: ["pChild2"],
  watch: {},
  computed: {},
  methods: {}
};
</script>
