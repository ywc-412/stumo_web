import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from './assets/js/axios'
import Notifications from 'vue-notification'
import { store } from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
//Vue.prototype.dialog = VuetifyDialog;

Vue.use(Notifications);

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
