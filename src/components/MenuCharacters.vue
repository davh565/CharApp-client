<template>
  <v-container
  grid-list-sm
  >
    <v-layout
  wrap
    >
      <v-flex
      xs12>
        <v-btn
        large 
        color="blue"
        to="/characters/add">New Character</v-btn>
      
        </v-flex>
    <br>
      <v-flex
        xs12
        sm6
        md4
        lg3
        v-for="(character, index) in characters" 
        :key="character._id"
        >
    <v-card
    
         >
   
        <v-card-title 
        class="justify-center" primary-title>
          <div>
            <h3 class="headline">
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
          v-if="!deleteMark[index]"
            flat
            color="red"
            @click="deleteConfirm(index)"
            
          >
            Delete
          </v-btn>
          <v-btn
          v-else
            
            color="red"
            @click="deleteChar(character._id, index)"
            
          >
            Delete?
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
  data() {
    return {
      testVal: 0,
      deleteMark : [],
      deleting : []
    }
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
    characters: function(){},
    // deleteMark: function(){}

  },
  methods: {
    test: function(){
      this.testVal++
    },
    deleteConfirm: function(index){
      // this.deleteMark[index] = true
      this.$set(this.deleteMark, index, true)
      console.log(this.deleteMark)
    },
    deleteChar: function(id, index){
      console.log(id, typeof(id))
      this.$set(this.deleteMark, index, false)
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
