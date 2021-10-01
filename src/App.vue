<template>
  <div id="pageheader">
    <div>
      <div>
        <span style="margin-right: 20px;">Check 3</span>
      </div>
    </div>
  </div>
  <div id="pagecontent">
    <div>
      <router-view></router-view>
    </div>
  </div>
  <div id="pagefooter">
    <div>Dragon Eyes Software</div>
  </div>



<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
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
      // TODO: delete dev data
      const dataObject = [
        {
          name: 'erste Liste',
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
          name: 'zweite Liste',
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
