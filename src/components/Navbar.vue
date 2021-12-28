<template>
  <nav>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><el-button type="text" style="width: 100%" v-on:click="changeToHome('home')">首頁</el-button></el-menu-item>
      <el-menu-item index="2"><el-button type="text" style="width: 100%" v-on:click="changeToHome('manage')">處理中心</el-button></el-menu-item>
      <el-menu-item index="3">
        <el-menu-item index="4">
          <template>
            <slot>
              <member-edit :source="editVal.source" :submitName='editVal.submitName' :type="editVal.type" />
            </slot>
          </template>
          </el-menu-item>
      </el-menu-item>
      <el-menu-item index="5"><el-button type="text" style="width: 100%" @click="logout">登出</el-button></el-menu-item>
    </el-menu>
  </nav>
</template>
<script>
import MemberEdit from './MemberEdit.vue';
import MemberEditVue from './MemberEdit.vue';

export default {
  components: { MemberEdit },
  name: "Navbar",
  comments: MemberEditVue,
  data() {
    return {
      activeIndex2: "1",
      editVal:{
        source : '註冊會員',
        submitName : '立即註冊',
        type: 'text',
        size: '',
      },
    };
  },
  methods: {
    changeToHome(data){
      this.$emit( "changeToHome", data);
    },
    logout() {
      localStorage.removeItem('token')
      this.$store.commit("SetAuth");
      this.$router.push("/");
      this.$forceUpdate();
    },
  },
};
</script>

    
