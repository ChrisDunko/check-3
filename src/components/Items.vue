<template>
  <p>Items ({{ listName }})</p>
  <button v-on:click="closeList">close</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Items",
  props: [
      'listName'
  ],
  emits: [
      'closeList'
  ],
  methods: {
    closeList() {
      this.$emit('closeList');
    }
  }
});
</script>

<style scoped>
</style>
