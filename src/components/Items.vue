<template>
  <p>Items ({{ listName }})</p>
  <ul>
    <li v-for="item in listItems"
        v-bind:key="item.name">
      {{ item.name }}
    </li>
  </ul>
  <button v-on:click="closeList">close</button>
  <new
      dialog-type="Item"
      v-on:save="newSave"
  ></new>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import New from "@/components/New.vue";
export default defineComponent({
  name: "Items",
  components: {
    New
  },
  props: [
      'listName'
  ],
  emits: [
      'closeList',
      'save'
  ],
  computed: {
    listItems: function() {
      return this.$store.state.lists.find(list => list.name == this.listName).items;
    }
  },
  methods: {
    closeList() {
      this.$emit('closeList');
    },
    newSave(nameNew: string) {
      console.log('New @ Items: ' + nameNew);
      this.$emit('save', nameNew);
    }
  }
});
</script>

<style scoped>
</style>
