import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from '@/store'
import TypeNav from '@/components/TypeNav'

import '@/mock/mockServer'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
