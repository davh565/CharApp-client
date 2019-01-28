<template>
  <div id="app" data-app="true">
    <v-app dark>
       
      <!-- <v-navigation-drawer app></v-navigation-drawer> -->

    <v-toolbar app dense >
      <v-breadcrumbs :items="breadcrumbItems" divider=">">
        <v-icon slot="divider">chevron_right</v-icon>
        <template slot="item" slot-scope="props">
          <router-link class="toolbar-title" :to="props.item.route">
            <v-toolbar-title>
              {{props.item.name}}
            </v-toolbar-title>
          </router-link>
        <!-- <a :href="props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text.toUpperCase() }}</a> -->
      </template>
      </v-breadcrumbs>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      

    </v-footer>

    </v-app>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created: function(){
    this.updatePath()
  },
  watch: {
    '$route' (to, from) {
      this.updatePath()
    },
  },
  methods:{
    updatePath: function(){
      const routeArray = this.$router.currentRoute.fullPath.split('/')
      routeArray[0]='CharApp'
      this.$store.commit('CURRENT_PAGE',routeArray)

    }

  },
  computed: {
    loaded(){
      if(this.$store.state.characters
                      .find(item => item._id === this.$router.currentRoute.params.id))
                      return true
                      else return false

    },
    breadcrumbItems(){
      return this.$store.state.currentPage.map((item, index, arr) => {
        let obj = {disabled: false}
        if(index === 0) {
          obj.name = 'CharApp'
          obj.route = '/'
        }
        else if(this.$router.currentRoute.params.id === item){
          console.log(item)
          obj.name = 'loading...'
          if(this.loaded){
            obj.name = this.$store.state.characters
                      .find(item => item._id === this.$router.currentRoute.params.id)
                      .data.playerName
                      }
          obj.route = '/' + arr[index-1] + '/' + item
        }
        else {
          obj.name = item
          obj.route = '/' + item
        }
        return obj
      })
    },
    messages(){

      return this.$store.state.currentPage
    }

  },

  data() {
    return {
      socketMessage: '',
    }
  },
//     sockets: {
//     connect: function () {
//         console.log('socket connected')
//     },
//     customEmit: function (data) {
//         console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
//     }
// },
}
</script>

<style>
html {

  background-color: #303030
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
