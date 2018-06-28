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
  import MainLayout from '@/components/common/mainLayout';
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
      messageData()
      {
        let messageParams = {
          page: 1,
          pageSize: 10,
          sortField: 'send_time',
          sortOrder: 'desc'
        }
        API.message(messageParams).then((result)=>
        {
          this.model.update(result.data);
          this.initData();
        }).catch((error)=>
        {
          console.log(error.message);
        })
      },
      initData()
      {
        this.tableData = this.model.list;
        this.total = this.model.total;
      },
      handleSizeChange(val)
      {
        console.log(`每页${val}条`);
      },
      handleCurrentChange(val)
      {
        console.log(`当前页:${val}`);
      }
    }
  }

</script>
<style type="text/css" lang="scss" rel="stylesheet/scss" scoped>

</style>
