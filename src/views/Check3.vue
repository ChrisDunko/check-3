<template>
  <intro></intro>
  <lists
      v-on:selectList="setListFocus"
  ></lists>
  <items></items>
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
      listFocus: ''
    }
  },
  methods: {
    newSave(nameNew: string) {
      if (nameNew.length === 0) {
        console.error('The list\'s name can\'t be empty.')
      } else {
        // TODO: push to list array in Store and Local Storage
        console.log('new: ' + nameNew);
      }
    },
    setListFocus(listName:string) {
      this.listNewDialog = false;
      this.listFocus = listName;
    }
  }
});
</script>

<style scoped>
</style>
