<template>
<el-container>
  <el-form ref="AccountFrom"
    :model="account" :rules="rules"
    label-position="left" label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系統登入</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="帳號" ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密碼"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="checked" checked class="remember">記住密碼</el-checkbox>
      <el-col class="inline" :span="7">
        <member-edit :source="editVal.source" :submitName='editVal.submitName' />
      </el-col>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%" @click="login">登入</el-button>
    </el-form-item>
    
  </el-form>
</el-container>
</template>

<script>
import MemberEdit from "./MemberEdit.vue";
import axios from '../service/axios';
export default {
  components: { MemberEdit },
  name: "登入",
  data() {
    return {
      logining: false,
      account: {
        username: "",
        password: "",
      },
      editVal:{
        source : '註冊會員',
        submitName : '立即註冊',
        type: 'text',
        size: '',
      },
      rules: {
        username: [
          { required: true, message: "請輸入帳號", trigger: "blur" },
        ],
        password: [
          { required: true, message: "請輸入密碼", trigger: "blur" },
        ],
      },
      checked: true,
    };
  },
  methods: {
    async login(){
      const response = await axios.post('http://localhost:8080/authenticate', this.account);
      localStorage.setItem('token', response.data.token);
      this.$store.commit("SetAuth");
      this.$store.commit("setToken", response.data.token);
      this.$router.push("/manage");
    }
  },
};
</script>


<style>
body {
  background: #dfe9fb;
}
.login-container {
  width: 350px;
  margin-left: 35%;
}
</style>