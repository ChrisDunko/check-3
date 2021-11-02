<template>
  <h2>{{ listName }}</h2>
  <div v-for="item in listItemsUndone"
       v-bind:key="item.name"
       style="background-color: darkgray; padding: 5px 0; display: flex; flex-direction: row; justify-content: space-between;">
    <span>{{ item.name }}</span>
    <button v-if="!item.done" v-on:click="setItemDone(item.name)">done</button>
    <button v-if="item.done" v-on:click="setItemUndone(item.name)">not done</button>
  </div>
  <button v-on:click="closeList">close</button>
  <new
      dialog-type="Item"
      v-on:save="newSave"
  ></new>
  <div v-for="item in listItemsDone"
       v-bind:key="item.name"
       style="background-color: darkgray; padding: 5px 0; display: flex; flex-direction: row; justify-content: space-between;">
    <span>{{ item.name }}</span>
    <button v-if="!item.done" v-on:click="setItemDone(item.name)">done</button>
    <button v-if="item.done" v-on:click="setItemUndone(item.name)">not done</button>
  </div>
  <hr>
  <p>Careful bejond this point...</p>
  <button v-on:click="deleteList">Delete list</button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import New from "@/components/New.vue";
export default defineComponent({
  name: "ListComposition",
  components: {
    New
  },
  props: [
    'listName'
  ],
  setup(props, context) {
    type Item = {
      name: string;
      done: boolean;
    }
    type List = {
      name: string;
      items: Item[];
    }
    const store = useStore();

    const listItems = computed(function() {
      return store.state.lists.find((list: List) => list.name == props.listName)?.items ?? [];
    });
    const listItemsUndone = computed(function() {
      return listItems.value.filter((item: Item) => {
        return item.done === false;
      });
    });
    const listItemsDone = computed(function() {
      return listItems.value.filter((item: Item) => {
        return item.done === true;
      });
    });

    function closeList() {
      context.emit('closeList');
    }
    function deleteList() {
      context.emit('deleteList');
    }
    function newSave(nameNew: string) {
      // console.log('New @ List: ' + nameNew);
      context.emit('save', nameNew);
    }
    function setItemDone(itemName: string) {
      // console.log(itemName);
      const listPosition: number = store.state.lists.map(function(list: List) { return list.name }).indexOf(props.listName) ?? -1;
      const itemPosition: number = store.state.lists[listPosition].items.map(function(item: Item) { return item.name }).indexOf(itemName) ?? -1;
      store.state.lists[listPosition].items[itemPosition].done = true;
      const listsString = JSON.stringify(store.state.lists);
      localStorage.setItem('lists', listsString);
    }
    function setItemUndone(itemName: string) {
      // console.log(itemName);
      const listPosition: number = store.state.lists.map(function(list: List) { return list.name }).indexOf(props.listName) ?? -1;
      const itemPosition: number = store.state.lists[listPosition].items.map(function(item: Item) { return item.name }).indexOf(itemName) ?? -1;
      store.state.lists[listPosition].items[itemPosition].done = false;
      const listsString = JSON.stringify(store.state.lists);
      localStorage.setItem('lists', listsString);
    }

    return {
      listItemsUndone,
      listItemsDone,
      closeList,
      deleteList,
      newSave,
      setItemDone,
      setItemUndone,
    }
  }
});
</script>

<style scoped>
</style>