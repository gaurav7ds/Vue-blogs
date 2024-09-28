<template>
  <div class="feeds-wrapper">
    <header-toggle></header-toggle>
    <div class="main-content">
      <div class="feed-list">
        <feed :url="apiUrl"></feed>
      </div>
      <div class="tags-list">
        <tags></tags>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "../components/Feed.vue";
import Tags from "../components/Tags.vue";
import HeaderToggle from "../components/HeaderToggle.vue";
export default {
  data() {
    return {
      apiUrl: "/articles/feed",
    };
  },
  components: {
    Feed,Tags,HeaderToggle
  },
};
</script>

<style scoped>
.feeds-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>