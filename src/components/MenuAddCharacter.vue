<template>
  <div class="hello">
    <h1>Add Character</h1>
    <br>
    <v-container>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
      
        <v-text-field
        v-model="name"
        :rules="nameRules"
        required
        label="Name">
        </v-text-field>

        <v-combobox
        :rules="rulesetRules"
        v-model="ruleset"
        required
        label="Ruleset"
        :items="rulesets"
        placeholder="Pathfinder">
        </v-combobox>

        <v-combobox
        v-model="campaign"
        label="Campaign"
        :items="campaigns">
        </v-combobox>
        <v-btn to="/characters">Back</v-btn>
        <v-btn :disabled="!valid"
        @click="validate">OK</v-btn>
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
    // keyNames: function(){
    //   this.tree = []
    //   let treeMake = function(val,arr){
    //   for (let key in val){
    //     let obj = {}
    //     obj.name = key
    //     obj.type = val[key]
    //     obj.value = ''
    //     if(typeof val[key] === 'object'){
    //       obj.children=[]
    //       treeMake(val[key],obj.children)
    //     }
    //     arr.push(obj)
    //   }}
    //   new treeMake(this.characteristics,this.tree)
    //   //  console.log('tree',this.tree)
    //  return this.tree
    // },
    rulesets: function(){
      return this.$store.state.rulesets
    },
    campaigns: function(){
      return this.$store.state.campaigns
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
    }),
sockets: {
    connect() {
      console.log(this.$socket.id +' connected',this.$socket)
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },

methods: {
  clickButton() {
    // this.$socket is `socket.io-client` instance
  },
  validate () {
    // console.log(this.$socket)
        if (this.$refs.form.validate()) {
        this.$socket.emit('addCharacter',{
        name: this.name,
        ruleset: this.ruleset,
        campaign: this.campaign});
          // this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
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
