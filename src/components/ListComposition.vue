<template>
  <h2>{{ listName }}</h2>
  <div v-for="item in listItemsUndone"
       v-bind:key="item.name"
       style="background-color: darkgray; padding: 5px 0; display: flex; flex-direction: row; justify-content: space-between;">
    <span>** {{ item.name }}</span>
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
  props: [
    'listName'
  ],
  setup(props) {
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
    return { listItemsUndone, listItemsDone }
  }
});
</script>

<style scoped>
</style>