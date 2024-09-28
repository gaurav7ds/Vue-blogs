<template>
    <div class="form-wrapper">
    <div class="form-head">
      <h3>Sign in</h3>
      <router-link :to="{ name: 'regester' }">Need an account?</router-link>
    </div>
    <div class="form-body">
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
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    ...mapState({
        isSubmitting:state=>state.auth.isSubmitting,
        hasErrors:state=>state.auth.validationErrors?true:false,
        errors:state=>state.auth.validationErrors
    }),
  },
  methods: {
    submit() {
      this.$store
        .dispatch("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.replace({name:'globalfeed'})
        });
    },
  },

}
</script>

<style>

</style>