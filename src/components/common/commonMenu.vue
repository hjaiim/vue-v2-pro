<template>
  <div>
    <div class="name">商户管理营销系统</div>
    <div v-for="item in menuList" class="menu-body">
      <div class="menu-name">
        <!--<img src="@/assets/item.icon.png" alt="">-->
        {{item.name}}
      </div>
      <ul v-for="option in item.nav">
        <li @click="handleChangePath(option.path)">{{option.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MenuData from '@/assets/data/menu.json';
  import API from 'api/api_staticJson';
  export default{
    created(){
      API.menu().then((result)=>
      {
        console.log(result);
      }).catch((error)=>
      {
        console.log(error.message);
      })
    },
    data(){
      return {
        menuList: MenuData
      }
    },
    components: {},
    watch: {},
    methods: {
      handleChangePath($path)
      {
        this.$router.push({path: $path})
      }
    }
  }

</script>
<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
  .name {
    background-color: deepskyblue;
    height: 50px;
  }

  .menu-body {
    background-color: #3a8ee6;
  }

  .menu-name {
    height: 72px;
    line-height: 72px;
    border-bottom: #8c939d 1px solid;
    padding-left: 20px;
    img {
      width: 15px;
    }
  }
</style>
