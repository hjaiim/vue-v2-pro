<template>
  <main-layout>
    <el-button @click="handleOpenWindow">另开窗口</el-button>
    <el-button @click="creatQrCode">加载二维码</el-button>
    <qr-code></qr-code>
  </main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from '@/components/common/mainLayout';
  import QrCode from '@/components/common/qrcode';
  import * as g from '@/jslib/global';
  export default{
    created(){

    },
    data(){
      return {
        size:{width:200,height:200}
      }
    },
    components: {
      MainLayout,
      QrCode
    },
    watch: {},
    methods: {
      handleOpenWindow()
      {
        window.open(`static/html/test.html`);
      },
      creatQrCode(){
        g.event.dispatchEvent('INIT_QRCODE', 'http://www.baidu.com');
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
