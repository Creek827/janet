import Vue from 'vue'

import VueRouter from 'vue-router'
import App from './App.vue'

import news from './components/news.vue';
import stars from './components/stars.vue';
Vue.use(VueRouter)
const router = new VueRouter({
  routes : [
    {path:'/news', component: news},
    {path:'/stars', component: stars},
  ]
})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
