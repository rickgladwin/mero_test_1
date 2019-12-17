/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



// Vue.component('App', require('./components/App'));
// Vue.component('Tasks', require('./components/Tasks').default);
// Vue.component('Search', require('./components/Search').default);

//app core files
import Vue from 'vue'
import App from './components/App'

//bootstrap-vue styling and js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

//vue-fontawesome core files
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

//import specific fontawesome icons and add to library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// library.add(faCalendarDay);
library.add(faAngleDown);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    render: h => h(App)
}).$mount('#app');



