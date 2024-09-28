<template>
<template v-if="feed">
  <div class="feed" v-for="(artice, index) in feed.articles" :key="index">
    <div class="article-head">
      <div class="user-info">
        <router-link :to="{name:'userprofile',params:{slug:artice.author.username}}">
            <img :src="artice.author.image" alt="">&nbsp;{{ artice.author.username }}
        </router-link>
        <p>{{ artice.createdAt }}</p>
      </div>
      <div class="likes">
        <like :count="artice.favoritesCount" :slug="artice.slug" :liked="artice.favorited"></like> 
      </div>
    </div>
    <div class="article-body">
        <router-link :to="{name:'article',params:{slug:artice.slug}}">
            <h3>{{ artice.description }}</h3>
        </router-link>
    </div>
    <div class="read-more">
        <p>read more</p>
    </div>
    <div class="tag-list">
      <tag-list :tags="artice.tagList"></tag-list>
    </div>
  </div>
  <pagination :total="feed.articlesCount" :limit="limit" :baseUrl="baseUrl" :currentPage="currentPage"></pagination>
</template>
</template>

<script>
import Pagination from './Pagination.vue';
import TagList from './TagList.vue';
import Like from './Like.vue';
export default {
  props: ["url"],
  components:{Pagination,TagList,Like},
  data(){
    return{
        limit:10,
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.feed.isLoading;
    },
    feed() {
      return this.$store.state.feed.data;
    },
    baseUrl(){
        this.$route.path
    },
    currentPage(){
        return this.$route.query.page || 1
    }
  },
  watch:{
    currentPage(){
        this.$store.dispatch("feed/getFeed", { apiUrl: `${this.url}?page=${this.crrrentPage}&offset=${this.currentPage*10-10}` });
    },
    url(){
        if(this.url.includes('?tag=')){
            this.$store.dispatch("feed/getFeed", { apiUrl: this.url });
        }
    }
  },
  created() {
    this.$store.dispatch("feed/getFeed", { apiUrl: this.url });
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
    outline: none;
}

</style>