<template>
  <p>New {{ dialogType }}</p>
  <input type="text" v-model="nameNew">
  <button v-on:click="save">save</button>

<!--  <p>{{ nameNew }}</p>-->

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
      console.log('in new: ' + this.nameNew);
      this.$emit('save', this.nameNew);
    }
  }
});
</script>

<style scoped>
</style>