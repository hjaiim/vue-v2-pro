<template>
  <main-layout>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="content" label="内容" width="300" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="time" label="日期" width="180"></el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page='currentPage'
                   :page-size="10" layout="prev,pager,next,jumper,sizes"
                   :total="total" background>
    </el-pagination>
  </main-layout>
</template>
<script type="text/ecmascript-6">
  import MainLayout from 'common/mainLayout';
  import API from 'api/api_index';
  import IndexModel from './model/IndexModel';
  export default{
    created(){
      this.preload();
    },
    data(){
      return {
        text: '',
        tableData: [],
        currentPage: 1,
        total: 1
      }
    },
    components: {
      MainLayout
    },
    watch: {},
    methods: {
      preload(){
        this.messageData(1);
      },
      messageData(page)
      {
        let messageParams = {
          page: page,
          pageSize: 10,
          sortField: 'send_time',
          sortOrder: 'desc'
        }
        API.message(messageParams).then((result)=>
        {

          IndexModel.update(result);
          this.initData();
        }).catch((error)=>
        {
          console.log(error.message);
          console.log(error);
        })
      },
      initData()
      {
        this.tableData = IndexModel.list;
        this.total = IndexModel.total;
      },
      handleSizeChange(val)
      {
        console.log(`每页${val}条`);
      },
      handleCurrentChange(val)
      {
        console.log(`当前页:${val}`);
        this.messageData(val);
      }
    }
  }

</script>
<style type="text/css" lang="scss" rel="stylesheet/scss" scoped>

</style>
