<template>
  <intro
      v-if="showIntro"
      v-on:closeIntro="dismissIntro"
  ></intro>
  <lists
      v-if="!listFocus"
      v-on:selectList="setListFocus"
  ></lists>
  <items
      v-if="listFocus"
      v-bind:listName="listFocus"
      v-on:closeList="closeList"
  ></items>
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
import Items from "@/components/Items.vue";
import New from "@/components/New.vue";
export default defineComponent({
  name: 'Index',
  components: {
    New,
    Intro,
    Lists,
    Items,
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
        // console.log('new: ' + nameNew);
        const newListObject = {
          name: nameNew,
          items: []
        }
        this.$store.state.lists.unshift(newListObject);
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
    }
  }
});
</script>

<style scoped>
</style>
