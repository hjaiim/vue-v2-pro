<template>
  <div class="wrapper">
    <div class="test-title">api-filters</div>
    <div>{{moneyNum | moneyFilter}}</div>
    <div>{{age | ageFilter('男','而立之年')}}</div>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {},
  data() {
    return {
      moneyNum: 88,
      age: 30
    };
  },
  filters: {
    moneyFilter(num) {
      return num.toFixed(2); // 保留2位小数
    },
    ageFilter(a, b, c) {
      // 可以传入参数,第一个参数是age
      console.log(a, b, c); // 30 "男" "而立之年"
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
