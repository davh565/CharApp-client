<template>
  <div class="hello">
    <h1>Characters</h1>
    <router-link to="/characters/add"><h2>Add Character</h2></router-link>
    <h2>Jimmy</h2>
    <h2>Testy McTesterson</h2>
    <h2>Theren Greenwood</h2>

  </div>
</template>

<script>
export default {
  name: 'MenuCharacters',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
