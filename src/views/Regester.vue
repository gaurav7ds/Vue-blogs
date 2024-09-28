<template>
  <div class="form-wrapper">
    <div class="form-head">
      <h3>Sign up</h3>
      <router-link :to="{ name: 'login' }">Have an account?</router-link>
    </div>
    <div class="form-body">
      <div class="form-item">
        <p v-if="hasErrors && errors.username">{{ errors.username.join(', ') }}</p>
        <input type="text" v-model.trim="username" placeholder="Username" />
      </div>
      <div class="form-item">
        <p v-if="hasErrors && errors.email">{{ errors.email.join(', ') }}</p>
        <input type="email" v-model.trim="email" placeholder="Email" />
      </div>
      <div class="form-item">
        <p v-if="hasErrors && errors.password">{{ errors.password.join(', ') }}</p>
        <input type="password" v-model.trim="password" placeholder="Password" />
      </div>
      <div class="submit">
        <button @click.prevent="submit" :disabled="isSubmitting">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.getters["auth/getSubmitting"];
    },
    hasErrors(){
        return this.$store.getters['auth/hasErrors']
    },
    errors(){
        return this.$store.getters['auth/errors']
    }
  },
  methods: {
    submit() {
      this.$store
        .dispatch("auth/regester", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$router.replace({name:'globalfeed'})
        });
    },
  },
};
</script>

<style>
</style>