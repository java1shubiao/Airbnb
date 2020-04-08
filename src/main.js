// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import path from 'path'
import BaiduMap from 'vue-baidu-map'
import BmView from 'vue-baidu-map'
import BmLocalSearch from 'vue-baidu-map'
import BmNavigation from 'vue-baidu-map'
import store from "./store/index"
import VueSocketio from 'vue-socket.io'
import confirm from 'element-ui'
Vue.prototype.$confirm = confirm
axios.defaults.timeout =  6000;
/* Vue.use(new VueSocketio({
        debug: true,
        connection: 'http://localhost:4001'
})) */
Vue.component('bm-view',BmView);
Vue.component('bm-navigation',BmNavigation);
Vue.component('bm-local-search',BmLocalSearch);
Vue.use(store)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
Vue.use(VueAxios, axios)
Vue.prototype.bus = new Vue();
axios.defaults.timeout = 3000;
axios.defaults.headers.post['Content-Type'] = "application/json";
Vue.use(path)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})