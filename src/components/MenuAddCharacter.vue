<template>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs4>
          
        <v-card>
          <v-card-title primary-title>
            <h2>Add Character</h2>
          </v-card-title>
          <v-card-text>
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
        disabled
        :rules="rulesetRules"
        v-model="ruleset"
        required
        label="Ruleset"
        :items="rulesets"
        placeholder="Pathfinder">
        </v-combobox>

        <v-combobox
        :rules="campaignRules"
        v-model="campaign"
        label="Campaign"
        :items="campaigns">
        </v-combobox>

        <v-btn to="/characters">Back</v-btn>
        <v-btn :disabled="!valid"
       @click="validate">OK</v-btn>
      </v-form>
          </v-card-text>
        </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    <!-- <v-treeview :items="keyNames" open-on-click>
      <template slot="label" slot-scope="{ item, open, leaf }">
      <p>{{item.name}}: <input v-if="leaf" v-on:blur="updateField(item)" v-model="item.value" :placeholder="item.type"></p>
    </template>
    </v-treeview> -->

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
    id: function(){
      // while(this.$store.state.newCharId === null){

      // }
      return this.$store.state.newCharId
    },
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
      campaignRules: [],
    }),
sockets: {
    connect() {
      // console.log(this.$socket.id +' connected',this.$socket)
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
watch: {
    // whenever question changes, this function will run
    id: function (){
      console.log(this.id)
      this.$router.push('/characters/'+this.id)
    },
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
        console.log(this.campaign)
          // this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  },
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
