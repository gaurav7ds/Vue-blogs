<template>
  <div class="tags-wrapper">
    <div class="tags">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="{ name: 'tag', params: { slug: tag } }"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tags"],
};
</script>

<style scoped>
.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.tags{
    display: flex;
    flex-wrap: wrap;
}
.tags a{
    text-decoration: none;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    color: white;
    background-color: rgba(0,0,0,0.5);
    border-radius: 25px;
    margin: 5px 7px;
}
</style>