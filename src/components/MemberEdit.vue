<template>
  <div text-align="left">
    <el-button :type="type" :size="size" @click="dialogVisible = true">{{ source }}</el-button>

    <el-dialog title="會員情報" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="帳號">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密碼">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="電子郵件">
          <el-input v-model="form.emailId"></el-input>
        </el-form-item>
        <el-form-item label="姓">
          <el-input v-model="form.firstName"></el-input>
        </el-form-item>
        <el-form-item label="名">
          <el-input v-model="form.lastName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)">{{ submitName }}</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>

import MemberService from '../service/MemberService';

export default {
  name: "MemberEdit",
  props:{
    source: String,
    submitName: String,
    type: String,
    size: String,
    inputForm: Object
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        id: '',
        userName: '',
        password: '',
        emailId: '',
        firstName: '',
        lastName: '',
      }
    };
  },
  methods: {
    onSubmit(data) {
      if(this.source === '註冊會員'){
        MemberService.createMember(data);
        
      }else{
        MemberService.updateMember(data);
      }
      this.dialogVisible = false;
    }
  },
  created(){
    if(this.inputForm != null){
      this.form = this.inputForm;
    }
  }
};
</script>