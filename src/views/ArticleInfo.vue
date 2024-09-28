<template>
  <div class="articel-wrapper" v-if="article">
    <div class="banner">
      <h2>{{ article.title }}</h2>
      <div class="controls">
        <div class="">
          <p>
            <router-link
              :to="{
                name: 'userprofile',
                params: { slug: article.author.username },
              }"
            >
              <img :src="article.author.image" alt="" />
              {{ article.author.username }}
            </router-link>
          </p>
          <p style="margintop: 5px">{{ article.createdAt }}</p>
        </div>
        <div class="btns">
        <p class="edit" @click="$router.push({name:'editArticle',params:{slug:$route.params.slug}})">Edit</p>
        <p class="delete">Delete</p>
      </div>
      </div>
    </div>
    <div class="article-body">
      {{ article.body }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      article: (state) => state.article.data,
    }),
  },
  created() {
    console.log(this.$route.params.slug);
    this.$store
      .dispatch("article/getArticle", { slug: this.$route.params.slug })
      .then((res) => console.log("article", res));
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  margin: 0;
  padding: 35px;
  background-color: rgb(74, 191, 111);
  color: white;
  text-align: center;
  margin-bottom: 10px;
}
h2 {
  color: white;
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 7px;
  text-align: left;
}
a {
  color: black;
  outline: none;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: left;
}
p {
  text-align: left;
}
img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}
.article-body {
  padding: 20px;
  text-align: left;
  letter-spacing: 5px;
}
.controls,.btns{
  display: flex;
  align-items: center;
}
.btns p{
  padding: 10px 15px;
  margin: 0 15px;
  color: white;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
}
.btns p.edit{
  background-color: white;
  color: rgb(74, 191, 111);
}
.btns p.delete{
  background-color: rgb(243, 77, 51);
}
</style>