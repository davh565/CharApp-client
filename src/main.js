import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
