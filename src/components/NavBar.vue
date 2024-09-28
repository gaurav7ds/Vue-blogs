<template>
  <nav>
    <div class="wrapper-nav">
      <div @click="$router.push('/')" class="left">
        <span class="green">BL<span>OG</span><span class="green">S </span></span
        ><span>L</span><span class="green">OG</span><span>O</span>
      </div>
      <div class="right">
        <div class="links">
          <div class="link">
            <router-link :to="{ name: 'globalfeed' }">Home</router-link>
          </div>
          <template v-if="isLogged">
            <div class="link">
              <router-link :to="{name:'createArticle'}"><i class="material-icons">create</i>Article</router-link>
            </div>
            <div class="link">
              <router-link to="/settings"><i class="material-icons">settings</i>Settings</router-link>
            </div>
            <div class="link">
              <router-link to="/profile"><img :src="currentUser.image" alt="">&nbsp;{{ currentUser.username }}</router-link>
            </div>
          </template>
          <template v-if="!isLogged">
            <div class="link">
            <router-link :to="{ name: 'login' }">Sign in</router-link>
          </div>
          <div class="link">
            <router-link :to="{ name: 'regester' }">Sign up</router-link>
          </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLoggedIn,
      currentUser: (state) => state.auth.currentUser,
    }),
  },
};
</script>

<style scoped>
nav {
  margin: 20px 0;
  width: 100%;
}
.wrapper-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  margin-left: 40px;
  cursor: pointer;
}
.left span {
  font-size: 35px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.4);
}
.left span.green {
  color: rgb(74, 191, 111);
}
.right {
  width: 40%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.link a {
  text-decoration: none;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 800;
  transition: color 0.4s;
  display: flex;
  align-items: center;
}
.link a:first-child{
    margin-right: 15px;
}
.link a:hover {
    color: black;
}
.link a.router-link-active {
  color: black;
}
.link i{
    font-size: 23px;
    margin-right: 2px;
}
.link img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
</style>