<template>
  <p>Check 3 is a Tasklists App that stores your data locally on your device.</p>
  <p>You don't need an account or submit any kind of personal information to use the app.</p>
  <p>Keep in mind that you loose your data if you change devices or delete the local storage of your browser.</p>
  <button v-on:click="closeIntro">ok, let's go!</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Intro",
  emits: [
      'closeIntro'
  ],
  methods: {
    closeIntro() {
      this.$emit('closeIntro');
    }
  }
});
</script>

<style scoped>
</style>
