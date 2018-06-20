<template>
  <div>
    <common-nav></common-nav>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="content" label="内容" width="180"></el-table-column>
      <el-table-column prop="time" label="日期" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
  import CommonNav from '@/components/common/nav/commonNav';
  import API from '../../api/api_index';
  import IndexModel from './model/IndexModel';
  export default{
    created(){
      this.messageData();
    },
    data(){
      return {
        text: '',
        model: new IndexModel(),
        tableData: [{
          title: '1',
          content: '防守打法',
          time: '2018-19-12'
        }]
      }
    },
    components: {
      CommonNav
    },
    watch: {},
    methods: {
      messageData()
      {
        this.$loading()
        let messageParams = {
          page: 1,
          pageSize: 10,
          sortField: 'send_time',
          sortOrder: 'desc'
        }
        API.message(messageParams).then((result)=>
        {
          this.$loading().close();
          this.model.update(result.data);
          this.initData();
        }).catch((error)=>
        {
          console.log('err-index');
          console.log(error);
        })
      },
      initData()
      {
        this.tableData = this.model.list;
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>
