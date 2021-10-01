<template>
  <p>Items ({{ listName }})</p>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Items",
  props: [
      'listName'
  ]
});
</script>

<style scoped>
</style>