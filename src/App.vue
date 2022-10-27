<template>
  <div id="app">
    <div>
      <headerNav></headerNav>
      <router-view />
    </div>
  </div>
</template>

<script>
import headerNav from "@/components/C-header.vue"
export default {
  name: "App",
  components: {
    headerNav,
  },
}
</script>

<style>
body {
  margin: 0;
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
