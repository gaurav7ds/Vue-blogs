<template>
    <div class="toggler">
        <router-link :to="{name:'globalfeed'}" :class="{active:routeName=='globalfeed'}">Global Feed</router-link>
        <router-link :to="{name:'yourFeed'}" :class="{active:routeName=='yourFeed'}">Your Feed</router-link>
        <router-link v-if="tag" :to="{name:'tag',params:{slug:'slug'}}" :class="{active:routeName=='tag'}"># {{ tag }}</router-link>
    </div>
  
</template>

<script>
export default {
    computed:{
        routeName(){
            console.log(this.$route.name);
            return this.$route.name
        }
    },
    props:['tag']

}
</script>

<style scoped>
.toggler{
    display: flex;
    align-items: center;
    padding: 10px;
}
a{
    text-decoration: none;
    outline: none;
    margin-right: 30px;
    font-size: 20px;
    color: rgba(0,0,0,0.4);
}
a.active{
    color: rgb(74, 191, 111);
}

</style>