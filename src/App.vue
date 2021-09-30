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
  }
});
</script>

<style>
</style>
