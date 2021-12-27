<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="id" prop="id"></el-table-column>
    <el-table-column label="Name" prop="userName"></el-table-column>
    <el-table-column label="password" prop="password"></el-table-column>
    <el-table-column label="EmailId" prop="emailId"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input @keyup.enter.native="searchMemberbyName(scope.row.userName, search)"
        @input="change($event)" v-model="search" size="mini" placeholder="输入關键字搜索"/>
      </template>
      <template slot-scope="scope">
        <member-edit :source="editVal.source" :submitName='editVal.submitName' :type="editVal.type" :size="editVal.size" :inputForm="scope.row"/>
        <el-col :span="12">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">Delete</el-button>
        </el-col>
        
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import MemberService from "../service/MemberService";
import MemberEdit from "./MemberEdit.vue";
  export default {
  components: { MemberEdit },
    data() {
      return {
        tableData: [],
        search: '',
        editVal:{
          source : 'Update',
          submitName : '更改資料',
          type: 'primary',
          size: 'mini'
        },
      }
    },
    methods: {
      async getMembers() {
        await MemberService.getMembers().then((response) => {
          this.tableData = response.data;
        });
      },
      handleDelete(id) {
        MemberService.deleteMember(id);
      },
      async change(e){
        this.$forceUpdate();
        await MemberService.getMemberByName(e, localStorage.getItem('token')).then((response) => {
          this.tableData = [];
          this.tableData.push(response.data);
        }).catch(() =>{
          this.tableData = [];
        });
        
      }
    },
    created() {
      this.getMembers();
    },
  }
</script>