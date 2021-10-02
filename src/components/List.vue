<template>
  <h2>{{ listName }}</h2>
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
  <hr>
  <p>Careful bejond this point...</p>
  <button v-on:click="deleteList">Delete list</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import New from "@/components/New.vue";
export default defineComponent({
  name: "List",
  components: {
    New
  },
  props: [
      'listName'
  ],
  emits: [
      'closeList',
      'deleteList',
      'save'
  ],
  computed: {
    listItems: function() {
      return this.$store.state.lists.find(list => list.name == this.listName)?.items;
    }
  },
  methods: {
    closeList() {
      this.$emit('closeList');
    },
    deleteList() {
      this.$emit('deleteList');
    },
    newSave(nameNew: string) {
      console.log('New @ List: ' + nameNew);
      this.$emit('save', nameNew);
    }
  }
});
</script>

<style scoped>
</style>
