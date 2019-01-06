<template>
  <div id="app">
    <router-link to="/"><h1>CharApp</h1></router-link>
    <router-view></router-view>
    <p v-if="isConnected">We're connected to the server!</p>
    <input v-model="socketMessage" @blur="sendMessage">
    <!-- <p>Messages from server:</p>
    <ul>
      <li v-for="(message, key) in messages" :key="key">
        <p>{{message.message}}</p>
        </li>
      </ul> -->
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'app',
  components: {
  },

  data() {
    return {
      isConnected: false,
      messages: [],
      socketMessage: '',
      socket: io('localhost:3000')
    }
  },
    sockets: {
    connect: function () {
        console.log('socket connected')
    },
    customEmit: function (data) {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
},
methods: {
        sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('chat message', this.socketMessage);
            this.socketMessage = ''
        }
    },
    mounted() {
        this.socket.on('chat message', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
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
