<template>
  <h2>{{ listName }}</h2>
  <div v-for="item in listItems"
       v-bind:key="item.name"
       style="background-color: darkgray; padding: 5px 0; display: flex; flex-direction: row; justify-content: space-between;">
    <span>{{ item.name }}</span>
    <button v-if="!item.done" v-on:click="setItemDone(item.name)">done</button>
    <button v-if="item.done" v-on:click="setItemUndone(item.name)">not done</button>
  </div>


<!--  <ul>-->
<!--    <li v-for="item in listItems"-->
<!--        v-bind:key="item.name">-->
<!--      {{ item.name }}-->
<!--    </li>-->
<!--  </ul>-->
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
      // console.log('New @ List: ' + nameNew);
      this.$emit('save', nameNew);
    },
    setItemDone(itemName:string) {
      // console.log(itemName);
      const listPosition: number = this.$store.state.lists.map(function(list) { return list.name }).indexOf(this.listName) ?? -1;
      const itemPosition: number = this.$store.state.lists[listPosition].items.map(function(item) { return item.name }).indexOf(itemName) ?? -1;
      this.$store.state.lists[listPosition].items[itemPosition].done = true;
      const listsString = JSON.stringify(this.$store.state.lists);
      localStorage.setItem('lists', listsString);
    },
    setItemUndone(itemName:string) {
      // console.log(itemName);
      const listPosition: number = this.$store.state.lists.map(function(list) { return list.name }).indexOf(this.listName) ?? -1;
      const itemPosition: number = this.$store.state.lists[listPosition].items.map(function(item) { return item.name }).indexOf(itemName) ?? -1;
      this.$store.state.lists[listPosition].items[itemPosition].done = false;
      const listsString = JSON.stringify(this.$store.state.lists);
      localStorage.setItem('lists', listsString);
    }
  }
});
</script>

<style scoped>
</style>
