import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

import './assets/js/bootstrap.bundle.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
