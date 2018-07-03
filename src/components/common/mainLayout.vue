<template>
  <div class="contain">
    <div class="contain-left">
      <common-menu></common-menu>
    </div>
    <div class="contain-right">
      <div class="right-nav">
        <common-nav></common-nav>
      </div>
      <div class="right-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CommonNav from 'common/commonNav';
  import CommonMenu from 'common/commonMenu';
  export default{
    created(){

    },
    data(){
      return {}
    },
    components: {
      CommonNav,
      CommonMenu
    },
    watch: {},
    methods: {}
  }

</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  html body {
    height: 100%;
  }

  .contain {
    overflow: hidden;
    min-height: 100%;
    min-width: 1200px;
    height: 100%;
    .contain-left {
      float: left;
      width: 240px;
      height: 100%;
    }
    .contain-right {
      float: left;
      height: 100%;
    }
  }

</style>
