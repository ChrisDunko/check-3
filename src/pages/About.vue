<template>
  <p>About</p>

  <p>{{ text }}</p>
  <p>{{ user.name }}</p>

  <router-link to="/">start using (again)</router-link>

  <hr>
  <p><a href="https://github.com/ChrisDunko/check-3" target="_blank">Github</a></p>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  name: 'About',
  components: {},
  setup() {
    const nameConst = ref('Chris');
    const user = reactive({
      name: 'Klaus'
    });

    setTimeout(function () {
      user.name = 'Maxi';
    }, 2000);

    return {
      text: nameConst,
      user: user
    };
  }
});
</script>

<style scoped>
</style>