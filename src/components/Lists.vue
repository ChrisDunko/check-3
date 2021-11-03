<template>
  <section>
    <h2>Lists</h2>
    <div v-for="list in $store.state.lists"
         v-bind:key="list.name"
         v-on:click="selectList(list.name)"
         style="padding: 15px 0;">
      {{ list.name }}
    </div>
  </section>
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
