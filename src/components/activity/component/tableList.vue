<template>
  <div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    created(){

    },
    data(){
      return {}
    },
    props: ['tableInfo', 'testInfo'],
    components: {},
    computed: {
      test(){
        return this.testInfo.test;
      }
    },
    watch: {
      tableInfo: {
        handler(val, oldVal){//只知道对象值发生变化
          console.log(val, oldVal)
        },
        deep: true
      },
      'tableInfo.name': function (val)
      {//对象具体属性
        console.log(val)
      },
      test (val)
      {//对象具体属性
        console.log(val);
      }
    },
    methods: {}
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
