<template>
  <el-row class="container">
    <!--head-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/">
          <img src="@/assets/logo.png" style="padding-left:8px;">
        </a>
      </div>
      <div class="topbar-title">
        <span>后台管理系统</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link userinfo-inner">
            <i class="iconfont icon-user"></i> {{nickname}}
            <i class="iconfont icon-down"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')">
                <span style="color: #555555;font-size: 14px;">个人信息</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')">
                <span style="color: #555555;font-size: 14px;">修改密码</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <el-col :span="24" class="main">
      <!--左边导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <!--菜单栏-->
        <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect">
          <template v-for="(item,index) in $router.options.routes" v-if="!item.menuShow">
            <el-submenu v-if="!item.leaf" :index="index+''">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>

              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                            :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i>
                <span slot="title">{{term.name}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </aside>
    </el-col>
  </el-row>
</template>
<script type="text/ecmascript-6">
  export default{
    created(){
      console.log(this.$router)
    },
    data(){
      return {
        nickname: 'hjai',
        collapsed: false,
        defaultActiveIndex: '0'
      }
    },
    components: {},
    watch: {},
    methods: {
      jumpTo(url){

      },
      logout(){

      },
      collapse(){
        this.collapsed = !this.collapsed;
      },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
    }
  }

</script>
<style type="text/css" lang="scss" rel="stylesheet/css" scoped>
  @import "../../assets/css/layout.scss";
</style>
