<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    data(){
      return {
        name:'hjai111'
      }
    },
    components: {
      HelloWorld
    },
    methods:{
      onClick_nameBtn()
      {
        consol.log(this.name);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
.test{
  background-color: #42b983;
  .hello{
    width: auto;
  }
}
</style>
