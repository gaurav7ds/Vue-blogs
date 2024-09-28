<template>
    <div class="form-wrapper article-form">
    <div class="form-head">
      <h3>{{ text }}</h3>
    </div>
    <div class="form-body">
      <div class="form-item">
        <p v-if="hasErrors && errors.email">{{ errors.email.join(", ") }}</p>
        <input type="text" v-model.trim="title" placeholder="Article Title" />
      </div>
      <div class="form-item">
        <p v-if="hasErrors && errors.password">
          {{ errors.password.join(", ") }}
        </p>
        <input type="text" v-model.trim="desc" placeholder="Description" />
      </div>
      <div class="form-item">
        <p v-if="hasErrors && errors.password">
          {{ errors.password.join(", ") }}
        </p>
        <textarea v-model.trim="about" placeholder="What is this Article about?" />
      </div>
      <div class="form-item">
        <p v-if="hasErrors && errors.password">
          {{ errors.password.join(", ") }}
        </p>
        <input type="text" v-model.trim="tags" placeholder="Enter Tags" />
      </div>
      <div class="submit">
        <button @click.prevent="submit" :disabled="isSubmitting">
          Publish Articel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['text','article'],
    data(){
        return{
            title:'',desc:'',about:'',tags:""
        }
    },
    methods:{
        submit(){
            console.log(this.text);
            const formData = {
                title:this.title,description:this.desc,about:this.about,tags:this.tags.split(' ')
            }
            this.$store.dispatch('article/postArticle',{data:formData})
        }
    },
    created(){
        console.log(this.article);
        if(this.article){
            this.title=this.article.title
            this.desc = this.article.description
            this.about = this.article.body
            this.tags = this.article.tagList.join(' ')
        }
    }

}
</script>

<style>

</style>