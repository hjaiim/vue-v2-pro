<template>
  <div>
    <p>登录页</p>
    <el-input v-model="account" placeholder="请输入账号"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="handleLogin" v-loading.fullscreen.lock='fullscreenLoading'>登录</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
import sha256 from "sha256";
import API from "api/api_login";
export default {
  created() {
    console.log(this.$route.query.redirect);
  },
  data() {
    return {
      account: "红包",
      password: "123456liu",
      fullscreenLoading: false
    };
  },
  components: {},
  watch: {},
  methods: {
    handleLogin() {
      this.fullscreenLoading = true;
      let loginParams = {
        logon: this.account,
        password: sha256(this.password)
      };

      API.login(loginParams)
        .then(result => {
          console.log("登录成功");

          //更新sessionStorage登录状态(登录)
          this.$utils.data.setData("isLogin", true);

          // 如果需要显示用户不分信息,建议存储到localStorage中.(这只是个例子)
          this.$utils.data.setData({ user: { name: "test" } });

          //回调页面
          this.$router.push({
            path: this.$route.query.redirect || "/"
          });
        })
        .catch(error => {
          console.log("登录失败");
          console.log(error);
        });
    }
  }
};
</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
