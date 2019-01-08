<template>
  <div class="hello">
    <h1>Add Character</h1>
    <h1>{{testData}}</h1>
    <router-link to="/characters"><h2>back</h2></router-link>
    <br>
    <v-treeview :items="keyNames" open-on-click>
      <template slot="label" slot-scope="{ item, open, leaf }">
      <p>{{item.name}}: <input v-if="leaf" v-on:blur="updateField(item)" v-model="item.value" :placeholder="item.type"></p>
    </template>
    </v-treeview>

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
    testData(){
      return this.$store.state.testData
    }
  },

  data: () => ({
      tree: [],
      characteristics: {
  ac: {
    total: 'Number',
    armor: 'Number',
    shield: 'Number',
    dex: 'Number',
    size: 'Number',
    deflect: 'Number',
    dodge: 'Number',
    natural: 'Number',
    misc: 'Number',
    touch: 'Number',
    flatFooted: 'Number'
  },
  age: 'Number',
  alignment: 'String',
  characterName: 'String',
  'class': 'String',
  combat: {
    bab: 'Number',
    melee: {
      attack1: 'Number',
      attack2: 'Number',
      attack3: 'Number',
      attack4: 'Number',
      stat: 'Number',
      size: 'Number',
      misc: 'Number'
    },
    ranged: {
      attack1: 'Number',
      attack2: 'Number',
      attack3: 'Number',
      attack4: 'Number',
      stat: 'Number',
      size: 'Number',
      misc: 'Number'
    }
  },
  concentration: 'Number',
  diety: 'String',
  dr: 'Number',
  eyes: 'String',
  gender: 'String',
  hair: 'String',
  height: 'String',
  homeland: 'String',
  hp: {
    max: 'Number',
    wounds: 'Number',
    temp: 'Number',
    nonLethal: 'Number'
  },
  initiative: {
    total: 'Number',
    dex: 'Number',
    misc: 'Number'
  },
  level: 'Number',
  maneuvers: {
    cmb: {
      total: 'Number',
      stat: 'Number',
      bab: 'Number',
      misc: 'Number',
      size: 'Number',
      temp: 'Number'
    },
    cmd: {
      total: 'Number',
      stat: 'Number',
      bab: 'Number',
      misc: 'Number',
      size: 'Number',
      temp: 'Number'
    }
  },
  misc: {
    name: [
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String'
    ],
    value: [
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String',
      'String'
    ]
  },
  money: {
    name: [
      'String',
      'String',
      'String',
      'String',
      'String',
      'String'
    ],
    value: [
      'String',
      'String',
      'String',
      'String',
      'String',
      'String'
    ]
  },
  playerName: 'String',
  race: 'String',
  saves: {
    fort: {
      total: 'Number',
      stat: 'Number',
      base: 'Number',
      magic: 'Number',
      misc: 'Number',
      temp: 'Number'
    },
    ref: {
      total: 'Number',
      stat: 'Number',
      base: 'Number',
      magic: 'Number',
      misc: 'Number',
      temp: 'Number'
    },
    will: {
      total: 'Number',
      magic: 'Number',
      stat: 'Number',
      base: 'Number',
      misc: 'Number',
      temp: 'Number'
    }
  },
  size: {
    category: 'String',
    modifier: 'Number'
  },
  speed: {
    total: 'Number',
    land: 'Number',
    misc: 'Number',
    fly: 'Number',
    flyManeuverability: 'String',
    swim: 'Number',
    climb: 'Number',
    burrow: 'Number'
  },
  sr: 'Number',
  stats: {
    str: {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    },
    dex: {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    },
    con: {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    },
    'int': {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    },
    wis: {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    },
    cha: {
      total: 'Number',
      modifier: 'Number',
      base: 'Number',
      misc: 'Number'
    }
  },
  weight: 'Number'
}
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
