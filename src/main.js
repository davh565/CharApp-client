import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
// import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000'
// }))

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
