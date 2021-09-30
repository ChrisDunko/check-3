<template>
  <p>Lists</p>
  <ul>
    <li v-for="list in $store.state.lists"
      v-bind:key="list.name"
      v-on:click="selectList(list.name)">
      {{ list.name }}
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Lists",
  emits: [
      'selectList'
  ],
  methods: {
    selectList(listName) {
      this.$emit('selectList', listName);
    }
  }
});
</script>

<style scoped>
</style>
