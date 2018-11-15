import Vue from 'vue'
import App from './App'
import flyio from './engine/Flyio'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$flyio = flyio

const app = new Vue(App)
app.$mount()