import App from './App.vue'
import Routes from './routes'
import { store } from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify,{
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.use(AsyncComputed)
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
