import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import vuetify from './plugins/vuetify'
import GlobalCss from './assets/style.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component('app-header',Header)
Vue.component('app-main',Main)
Vue.component('app-footer',Footer)
Vue.component('app-carousel',Carousel)


new Vue({
  GlobalCss,
  vuetify,
  render: h => h(App)
}).$mount('#app')
