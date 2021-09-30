<template>
  <intro></intro>
  <lists></lists>
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
      itemNewDialog: false
    }
  },
  methods: {
    newSave(nameNew: string) {
      console.log('new: ' + nameNew);
    }
  }
});
</script>

<style scoped>
</style>