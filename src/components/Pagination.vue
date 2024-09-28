<template>
  <div class="pagination">
    <div class="page" v-for="(page,index) in pages" :key="index" :class="currentPage==page?'current':''" >
        <router-link :to="{path:baseUrl,query:{page:page}}">
            {{ page }}
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props:['total','limit','baseUrl','currentPage'],
    computed:{
        pages(){
            return Math.ceil(this.total/this.limit)
        }
    }
}
</script>

<style>

</style>