<template>
  <p>Items ({{ listName }})</p>
  <ul>
    <li v-for="item in listItems"
        v-bind:key="item.name">
      {{ item.name }}
    </li>
  </ul>
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
  computed: {
    listItems: function() {
      return this.$store.state.lists.find(list => list.name == this.listName).items;
    }
  },
  methods: {
    closeList() {
      this.$emit('closeList');
    }
  }
});
</script>

<style scoped>
</style>
