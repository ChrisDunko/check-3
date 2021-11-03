<template>
  <p>New {{ dialogType }}</p>
  <input type="text" v-model="nameNew">
  <button v-on:click="save">save</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "New",
  props: [
      'dialogType'
  ],
  emits: [
      'save'
  ],
  data() {
    return {
      nameNew: ''
    }
  },
  methods: {
    save() {
      // eslint-disable-next-line
      console.log('New ' + this.dialogType + ': ' + this.nameNew);
      this.$emit('save', this.nameNew);
      this.nameNew = '';
    }
  }
});
</script>

<style scoped>
</style>
