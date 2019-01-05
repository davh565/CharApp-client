<template>
  <div id="app">
    <router-link to="/"><h1>CharApp</h1></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuMain from './components/MenuMain.vue'

export default {
  name: 'app',
  components: {
    MenuMain
  }
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
