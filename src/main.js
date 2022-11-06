import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//字体引入
import './assets/font/fontNav.less'

//轮播图制作
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter)

import { Card, Tabs , Form } from 'element-ui';
Vue.use(Card)
Vue.use(Tabs)
Vue.use(Form)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
