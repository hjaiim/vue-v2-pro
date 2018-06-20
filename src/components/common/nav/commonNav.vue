<template>
  <div style="background-color:green">
    <p>我是导航栏</p>
    <el-button @click="loginOut">登出</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
  import API from '../../../api/api_login';
  export default{
    created(){
    },
    data(){
      return {
      }
    },
    components: {},
    watch: {},
    methods: {
      loginOut()
      {
        //更新sessionStorage登录状态(登出)
        g.utils.setSessionData('isLogin', false);

        API.logout().then(()=>
        {
          this.$message({
            message: '登出成功',
            type: 'success'
          });

          this.$router.push({
            path: '/login'
          });
        })
      }
    }
  }

</script>

