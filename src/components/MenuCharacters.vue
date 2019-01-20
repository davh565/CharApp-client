<template>
  <v-container
  v-if="characters"
  fluid
  grid-list-md
  text-xs-center>
    <v-layout
    row
    wrap
    justify-center
    >
      <v-flex
      xs12>
        <h1>Characters</h1>
        <v-btn
        large 
        color="blue"
        to="/characters/add">New Character</v-btn>
        <br><br>
        </v-flex>
    <br>
    <!--<li v-for="character in characters" :key=character._id>
      
    </li><br> -->
    <v-flex
      align-self-center
        xs12
        sm6
        md4
        v-for="character in characters" 
        :key=character._id>
    <v-card
    
     >
        <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img> -->

        <v-card-title 
        class="justify-center" primary-title>
          <div>
            <h3 class="headline mb-0">
              {{character.data.playerName}}
            </h3>
            <div>{{character.data._ruleset}}<br>
            {{character.data._campaign}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
          flat
          color="blue"
          :to="'/characters/'+character._id">
        Select
      </v-btn>
          <v-btn
            flat
            color="red"
            @click="deleteChar(character._id)"
            
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MenuCharacters',
  props: {
    msg: String
  },
  created: function () {
    this.$socket.emit('reqCharacters',{})
  },
  computed: {
    characters: function(){
      // console.log(this.$store.state.characters[0].data)
      return this.$store.state.characters
    },
  },
  watch: {
    characters: function(){}
  },
  methods: {
    deleteChar: function(id){
      console.log(id, typeof(id))
      this.$socket.emit('delCharacter',id)
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
