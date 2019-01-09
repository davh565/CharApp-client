<template>
  <div class="hello">
    <h1>Add Character</h1>
    <br>
    <v-container>
      <v-form>
        <v-text-field
        label="Name">
        </v-text-field>
        <v-combobox
        label="Ruleset"
        :items="rulesets"
        placeholder="Pathfinder">
        </v-combobox>
        <v-combobox
        label="Campaign"
        :items="campaigns">
        </v-combobox>
        <v-btn to="/characters">Back</v-btn>
        <v-btn>OK</v-btn>
      </v-form>

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
    msg: String
  },
  

  computed:{
    //Clean this up later
    keyNames: function(){
      this.tree = []
      let treeMake = function(val,arr){
      for (let key in val){
        let obj = {}
        obj.name = key
        obj.type = val[key]
        obj.value = ''
        if(typeof val[key] === 'object'){
          obj.children=[]
          treeMake(val[key],obj.children)
        }
        arr.push(obj)
      }}
      new treeMake(this.characteristics,this.tree)
      //  console.log('tree',this.tree)
     return this.tree
    },
    rulesets: function(){
      return this.$store.state.rulesets
    },
    campaigns: function(){
      return this.$store.state.campaigns
    }
  },

  data: () => ({
      tree: []
    })


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
