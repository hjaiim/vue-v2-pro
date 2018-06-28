<template>
	<main-layout>
    <div>
      <el-button @click="handleOpenWindow">另开窗口</el-button>
    </div>
  </main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from '@/components/common/mainLayout'
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
		methods: {
      handleOpenWindow()
      {
        window.open(`static/html/test.html`);
      }
    }
	}

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
