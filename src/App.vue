<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      name: "hjai111"
    };
  },
  components: {
    HelloWorld
  },
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
#app {
  height: 100%;
  width: 100%;
  margin: 0;
}
body {
  margin: 0;
}
</style>
