<template>
<nav-bar></nav-bar>
<banner v-if="!($route.name=='article' || $route.name=='createArticle' || $route.name=='settings')"></banner>
<router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Banner from './components/Banner.vue';
export default {
  components:{
    NavBar,Banner
  },
  mounted(){
    this.$store.dispatch("auth/login", {email:'gsspidy@gmail.com',password:'password'})
  }
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
