import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Axios from 'axios'
Axios.defaults.baseURL='http://localhost:3000';

Vue.use(ElementUI);
Vue.use(Vuex);
// Vue.use(Axios);
Vue.use(Viewer)
Vue.config.productionTip = false;
window.router=router


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
