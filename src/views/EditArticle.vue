<template>
  <article-form v-if="article" text="Edit your article" :article="article"></article-form>
</template>
    
    <script>
    import { mapState } from 'vuex';
import ArticleForm from "../components/ArticleForm.vue";
export default {
  components: {
    ArticleForm,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      article: (state) => state.article.data,
    }),
  },
  created() {
    this.$store
      .dispatch("article/getArticle", { slug: this.$route.params.slug })
  },
};
</script>
    
<style>
</style>