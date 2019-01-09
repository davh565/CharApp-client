<template>
  <div class="hello">
    <h1>Characters</h1>
    <br>
    <v-btn large to="/characters/add">New Character</v-btn><br><br>
    <li v-for="character in characters" :key=character>
      <v-btn to="{ path: '/characters/:character'}">
        {{character}}
      </v-btn>
    </li><br>
  </div>
</template>

<script>
export default {
  name: 'MenuCharacters',
  props: {
    msg: String
  },
  computed: {
    characters: function(){
      return this.$store.state.characters
    }
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
