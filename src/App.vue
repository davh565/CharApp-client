<template>
  <div id="app">
    <router-link to="/"><h1>{{testData}}</h1></router-link>
    <router-view></router-view>
    <input v-model="socketMessage" >
    <!-- <p>Messages from server:</p>
    <ul>
      <li v-for="(message, key) in messages" :key="key">
        <p>{{message.message}}</p>
        </li>
      </ul> -->
  </div>
</template>

<script>
// import io from 'socket.io-client'

export default {
  name: 'app',
  components: {
  },
  computed: {
    testData(){
      return this.$store.state.testData
    }
  },

  data() {
    return {
      messages: [],
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
methods: {
    //     sendMessage(e) {
    //         e.preventDefault();
            
    //         this.socket.emit('chat message', this.socketMessage);
    //         this.socketMessage = ''
    //     }
    // },
    // mounted() {
    //     this.socket.on('chat message', (data) => {
    //         this.messages = [...this.messages, data];
    //         // you can also do this.messages.push(data)
    //     });
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
