<template>
  <el-container>
    <el-header><navbar /></el-header>
    <el-main><member /></el-main>
  </el-container>
</template>
<script>
import Member from "./Member.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Manage",
  components: { Navbar, Member },
  setup() {},
};
</script>
