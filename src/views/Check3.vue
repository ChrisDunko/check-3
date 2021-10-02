<template>
  <intro
      v-if="showIntro"
      v-on:closeIntro="dismissIntro"
  ></intro>
  <lists
      v-if="!listFocus"
      v-on:selectList="setListFocus"
  ></lists>
  <list
      v-if="listFocus"
      v-bind:listName="listFocus"
      v-on:closeList="closeList"
      v-on:deleteList="deleteList"
      v-on:save="newSave"
  ></list>
  <new
      v-if="listNewDialog"
      dialog-type="List"
      v-on:save="newSave"
  ></new>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Intro from "@/components/Intro.vue";
import Lists from "@/components/Lists.vue";
import List from "@/components/List.vue";
import New from "@/components/New.vue";
export default defineComponent({
  name: 'Index',
  components: {
    New,
    Intro,
    Lists,
    List,
  },
  data() {
    return {
      listNewDialog: true,
      itemNewDialog: false,
      listFocus: '',
      showIntro: true
    }
  },
  methods: {
    newSave(nameNew: string) {
      if (nameNew.length === 0) {
        console.error('The list\'s name can\'t be empty.')
      } else {
        console.log('new: ' + nameNew);

        if(this.listFocus) {
          // item
          // check if item is already on the list (since the name is used as the key of the item, duplicate entries have to be avoided)
          const listPosition: number = this.$store.state.lists.map(function(list) { return list.name }).indexOf(this.listFocus) ?? -1;
          const itemPosition: number = this.$store.state.lists.find(list => list.name === this.listFocus)?.items.map(function(item) { return item.name }).indexOf(nameNew) ?? -1;
          if(listPosition > -1) {
            // list exists
            if(itemPosition === -1) {
              // new item
              const newItemObject = {
                name: nameNew,
                done: false
              }
              // console.log('new item: ' + newItemObject);
              this.$store.state.lists[listPosition].items.unshift(newItemObject);
            } else {
              // recycle item
              this.$store.state.lists[listPosition].items[itemPosition].done = false;
              console.info('The item is already on that list.');
            }
          }
        } else {
          // save list
          // TODO: check if a list with same name already exists
          const newListObject = {
            name: nameNew,
            items: []
          }
          this.$store.state.lists.unshift(newListObject);
        }
        const listsString = JSON.stringify(this.$store.state.lists);
        localStorage.setItem('lists', listsString);
      }
    },
    setListFocus(listName:string): void {
      this.listNewDialog = false;
      this.listFocus = listName;
    },
    dismissIntro(): void {
      this.showIntro = false;
    },
    closeList() {
      this.listFocus = '';
      this.listNewDialog = true;
    },
    deleteList() {
      // console.log('delete list ' + this.listFocus);
      const position = this.$store.state.lists.map(function(list) { return list.name; }).indexOf(this.listFocus);
      // console.log(position);
      this.$store.state.lists.splice(position, 1);
      this.listFocus = '';
      this.listNewDialog = true;
      const listsString = JSON.stringify(this.$store.state.lists);
      localStorage.setItem('lists', listsString);
    }
  }
});
</script>

<style scoped>
</style>
