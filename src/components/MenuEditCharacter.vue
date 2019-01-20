<template>
  <div class="hello">
    <h1>Edit {{character?character.data.playerName:'Character'}}</h1>
    <br>
    <v-container
    v-if="character">
      <!-- <v-btn @click="clickButton">click</v-btn> -->
      <v-treeview
      :items="keyNames"
      open-on-click

      transition>
        <template
        slot="label"
        slot-scope="{ item, open, leaf }">
          <p>{{item.name}}: 
          <input
          v-on:blur="updateField(item)"
          v-if="leaf"
          v-model="item.model"
          :placeholder="item.value"></p>
    </template></v-treeview>
    <!-- <p>{{character}}</p> -->

    </v-container>
    <!-- <v-treeview :items="keyNames" open-on-click>
      <template slot="label" slot-scope="{ item, open, leaf }">
      <p>{{item.name}}: <input v-if="leaf" v-on:blur="updateField(item)" v-model="item.value" :placeholder="item.type"></p>
    </template>
    </v-treeview> -->

  </div>
</template>

<script>

export default {
  name: 'MenuAddCharacter',

  props: {
    id: String
  },
    created: function () {
      // if(this.$store.state.characters.find(x => x._id !== this.$route.params.id)){
        if(this.character===undefined){

          this.$socket.emit('reqCharacters')
        }
      // }
  },
  updated: function() {
    console.log(this.character.data)
  },
  computed:{
    //Clean this up later
    keyNames: function(){
      if(this.character){
        const entries = Object.entries(this.character.data)
        let index = 0
          let parentEntry = null
        const treeMaker = function(acc,cur,idx,src){
          // console.log(idx,src.length)
          index++
          acc[idx] = {
            id: index,
            name: cur[0],
            model: ''}
            if(parentEntry) acc[idx].parent = parentEntry
            if(typeof cur[1] === 'object'){
              parentEntry = cur[0]
              const childEntries = Object.entries(cur[1])
              // console.log(childEntries)
              acc[idx].children = childEntries.reduce(treeMaker,[])
            }
            else {
              acc[idx].value = cur[1]
              }
              if (idx === src.length-1) parentEntry = null
          return acc
        }

        const tree = entries.reduce(treeMaker,[])
        // console.log(tree)
        return tree
      }
      else return []
    },
    character: function(){
      return this.$store.state.characters.find(x => x._id === this.$route.params.id)
    }
  },
  watch: {
    character: function(){
    }

  },
  data: () => ({
      tree: [],
      valid: true,
      name: '',
      nameRules:  [v => !!v || 'Name is required'],
      ruleset: 'Pathfinder',
      rulesetRules: [ v => !!v || 'Ruleset is required'],
      campaign: '',
      open: []
    }),
  sockets: {
      connect() {
        // console.log(this.$socket.id +' connected',this.$socket)
        // console.log(this.$route.params.id)
      },
      // customEmit(val) {
      //   console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      // }
    },

  methods: {

    updateField(input){
      // console.log({
      //     input
      //   })
       if(input.model) {if(input.parent){
          this.$socket.emit('editCharacter',{
            id: this.character._id,
            obj: {[input.parent] : {
              [input.name] : input.model
            }}
          })

        }
        else{
          // console.log(input.name)
          this.$socket.emit('editCharacter',{
            id: this.character._id,
            obj: {
              [input.name] : input.model
            }
          })

        }}

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
::-webkit-input-placeholder{
  color:black;
}
input {
  color: rgb(200, 0, 0);
}
</style>
