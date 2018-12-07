// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import './directives'
import './components'

Vue.use(VueSweetalert2)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,store,
    components: {App},
    template: '<App/>'
});
