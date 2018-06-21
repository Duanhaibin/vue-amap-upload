// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'
import  Axios  from 'axios'
import router from './router'
import FastClick from 'fastclick'

Vue.prototype.$ajax = Axios
FastClick.attach(document.body)

// Vue.use(Axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
