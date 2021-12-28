<template>
  <el-container>
    <el-header><navbar v-on:changeToHome="changeHome"/></el-header>
    <el-main>
      <div v-if="isHome">
        <home />
      </div>
      <div v-else>
        <member />
      </div>
    </el-main>
  </el-container>
</template>
<script>
import Home from './Home.vue';
import Member from "./Member.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Manage",
  data(){
    return{
      isHome: Boolean,
    }
  },
  components: { Navbar, Member, Home },
  methods:{
    changeHome(data){
      if(data === 'home'){
        this.isHome = true;
      }else if(data === 'manage'){
        this.isHome = false;
      }
    }
  },
  created(){
    this.isHome = true;
  }
};
</script>
