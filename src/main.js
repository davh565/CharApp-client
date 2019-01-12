import App from './App.vue'
import Routes from './routes'
import { store } from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(
  VueSocketio, 
  io(':3000/'), 
  { store }
)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
