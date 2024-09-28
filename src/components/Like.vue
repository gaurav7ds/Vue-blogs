<template>
  <div class="like-box" :class="{liked:oLiked}" @click="handleLike">
    <p>
        <icon class="material-icons">favorite</icon>
        {{ oCount }}
    </p>
  </div>
</template>

<script>
export default {
    props:['count','slug','liked'],
    methods:{
        handleLike(){
            this.oLiked=!this.oLiked
            this.oLiked?this.oCount++:this.oCount--
        }
    },
    data(){
        return{
            oCount:this.count,
            oLiked:this.liked
        }
    }
}
</script>

<style scoped>
.like-box{
    padding: 7px 10px;
    border: 2px solid rgb(74, 191, 111);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}
.like-box:hover{
    background: rgb(74, 191, 111);
    cursor: pointer;
}
.like-box.liked{
    background: rgb(74, 191, 111);
}
.like-box:hover p{
    color: white;
}
.like-box.liked p{
    color: white;
}
.like-box:hover i{
    color: white;
}
p{
    font-size: 17px;
    font-weight: 400;
    color: rgb(74, 191, 111);
    display: flex;
    align-items: center;
}
</style>