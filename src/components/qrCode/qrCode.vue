<template>
	<main-layout>
      <div>我的二维码
        <!--不足10k,解析base64,打包到index.js-->
        <img src="@/assets/logo.png" alt="">
        <!--大图片,assets目录下,跑本地,也会打包到static/img目录下-->
        <img style='width: 200px' src="@/assets/test.jpg" alt="">
      </div>
      <div>购买二维码
        <img src="static/img/logo.png" alt="">
      </div>
    <div>
    </div>
	</main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from 'common/mainLayout';
	export default{
		created(){

		},
		data(){
			return {
			}
		},
		components: {
		  MainLayout
    },
		watch: {},
		methods: {}
	}

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
