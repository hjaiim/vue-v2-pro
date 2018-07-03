<template>
  <main-layout>

  </main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from 'common/mainLayout';
  import API from 'api/api_activity';
  export default{
    created(){
      this.preload();
    },
    data(){
      return {}
    },
    components: {
      MainLayout
    },
    watch: {},
    methods: {
      preload(){
        this.activityData();
        this.test();
      },
      activityData(){
        let params = {
          activityStatus: 0,
          page: 1,
          pageSize: 10
        }
        API.data(params).then((result)=>
        {
//          console.log(result);
        }).catch((err)=>
        {
          console.log(err);
        })
      },
      initData()
      {

      },
      test()
      {
        let params = {
          activityStatus: 0,
          page: 1,
          pageSize: 10
        }

        API.all(params).then((result)=>
        {
          console.log(result)
        })
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
