<template>
  <div id="pageheader">
    <div>
      <div>
<!--        <a style="margin-right: 20px;" href="https://github.com/ChrisDunko/check-3" target="_blank">Check 3</a>-->
        <router-link to="/about">Check 3</router-link>
      </div>
    </div>
  </div>
  <div id="pagecontent">
    <div>
      <router-view></router-view>
    </div>
  </div>
  <div id="pagefooter">
    <div><a href="https://dragoneyes.software" target="_blank">Dragon Eyes Software</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {}
  },
  methods: {},
  created() {
    // get data from local storage
    let listsString = localStorage.getItem("lists") ?? '';
    console.log(listsString);
    if(!listsString) {
      console.log('create');
      const dataObject = [
        {
          name: 'Example List 1',
          items: [
            {
              name: 'item 1.1',
              done: false
            },
            {
              name: 'item 1.2',
              done: true
            }
          ]
        },
        {
          name: 'Example List 2',
          items: [
            {
              name: 'item 2.1',
              done: false
            },
            {
              name: 'item 2.2',
              done: true
            }
          ]
        }
      ];
      this.$store.state.lists = dataObject;
      listsString = JSON.stringify(dataObject);
      localStorage.setItem('lists', listsString);
    } else {
      const dataObject = JSON.parse(listsString);
      this.$store.state.lists = dataObject;
    }
  }
});
</script>

<style>
</style>
