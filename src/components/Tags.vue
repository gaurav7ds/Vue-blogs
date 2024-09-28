<template>
    <div class="tags-wrapper" v-if="tags">
        <div class="tags-box">
            <div class="head">
                <p>Popular Tags</p>
            </div>
            <div class="tags">
                <router-link v-for="tag in tags" :key="tag" :to="{name:'tag',params:{slug:tag}}">
                    {{ tag }}
                </router-link>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    computed:{
        tags(){
            return this.$store.state.feed.tags
        }
    },
    created(){
        this.$store.dispatch("feed/getTags")
    }
}
</script>

<style scoped>
.tags-wrapper{
    width: 80%;
    margin: 20px;
    padding: 30px;
    background-color: rgba(0,0,0,0.1);
}
.tags-box{
    display: flex;
    flex-direction: column;
}
.tags-box p{
    font-size: 20px;
    color: rgba(0,0,0,0.7);
    font-weight: 700;
    margin-bottom: 15px;
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