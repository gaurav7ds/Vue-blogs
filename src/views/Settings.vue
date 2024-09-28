<template>
  <div class="form-wrapper article-form">
    <div class="form-head">
      <h3>Your settings</h3>
    </div>
    <div class="form-body">
      <div class="form-item">
        <input type="text" v-model.trim="form.image" placeholder="Image Url" />
      </div>
      <div class="form-item">
        <input
          type="text"
          v-model.trim="form.username"
          placeholder="Username"
        />
      </div>
      <div class="form-item">
        <textarea v-model.trim="form.bio" placeholder="About you" />
      </div>
      <div class="form-item">
        <input type="text" v-model.trim="form.email" placeholder="Email" />
      </div>
      <div class="form-item">
        <input type="password" v-model.trim="form.password" placeholder="New password" />
      </div>
      <div class="submit">
        <button @click.prevent="submit" :disabled="isSubmitting">
          Update Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.currentUser,
    }),
    form() {
      if (this.user) {
        return {
          username: this.user.username,
          bio: this.user.bio,
          email: this.user.email,
          image: this.user.image,
          password: "",
        };
      }
      return {
        username: "",
        bio: "",
        email: "",
        image: "",
        password: "",
      };
    },
  },
};
</script>

<style>
</style>