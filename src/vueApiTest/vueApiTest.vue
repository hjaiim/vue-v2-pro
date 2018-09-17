<template>
	<main-layout>
		<filter-test></filter-test>
		<Mixin-test></Mixin-test>
	</main-layout>
</template>
<script type="text/ecmascript-6">
import MainLayout from "common/mainLayout";
import FilterTest from "./testApi/filters";
import MixinTest from "./testApi/mixin.vue";
export default {
  created() {},
  data() {
    return {};
  },
  components: {
    MainLayout,
    FilterTest,
    MixinTest
  },

  watch: {},
  methods: {
    test() {}
  }
};
</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
