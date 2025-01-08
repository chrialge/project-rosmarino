import { createApp } from 'vue'
import './assets/sass/app.scss';
import App from './App.vue';
import { router } from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';



createApp(App).use(router).component('VueDatePicker', VueDatePicker).mount('#app');

router.debug == true;
// console.log(router.getRoutes());