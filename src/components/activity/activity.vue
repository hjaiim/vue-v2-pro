<template>
  <main-layout>
    <button @click="changeInfo">改变数据</button>
    <button @click="changeTest">改变test数据</button>
    <table-list :tableInfo="tableInfo" :testInfo="testInfo"></table-list>
  </main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from 'common/mainLayout';
  import API from 'api/api_activity';
  import TableList from './component/tableList.vue';
  export default{
    created(){
      
    },
    data(){
      return {
        tableInfo: {
          name: '数据列表',
          width: '100',
          height: '200'
        },
        testInfo: {
          test: '啊啊啊'
        }
      }
    },
    components: {
      MainLayout,
      TableList
    },
    watch: {},
    methods: {
      preload(){
        let params = {
          activityStatus: 0,
          page: 1,
          pageSize: 10
        }

        API.all(params).then((result)=>
        {
          console.log(result)
        })
      },
      changeInfo()
      {
        this.tableInfo.name = '表格列表';
      },
      changeTest()
      {
        this.testInfo.test = '哈哈哈';
//        this.testInfo = {test:'kakk'}
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
