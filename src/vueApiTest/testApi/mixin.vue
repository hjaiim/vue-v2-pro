<template>
    <div class="wrapper">
        <div class="test-title">api-mixin</div>
        <div>{{str}}</div>
        <button @click='testFilter'>点我匹配</button>
        <div>{{filterStr}}</div>
    </div>
</template>

<script>
export default {
  created() {},
  mounted() {},
  data() {
    return {
      str: "sjdfksj932982nf2f20jd29djfj8",
      filterStr: ""
    };
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {
    testFilter() {
      this.filterStr = this.matchNum(this.str);
    }
  }
};
</script>
<style lang="scss" scoped>
.test-title {
  color: red;
}
</style>