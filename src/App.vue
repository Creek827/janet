<template>
  <div id="app">
    <h2>感觉自己萌萌哒</h2>
   <router-link to="/news">大事</router-link>
   <router-link to="/stars">明星</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
