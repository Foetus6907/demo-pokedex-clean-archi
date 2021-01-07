import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store/index'
import router from "@/vue/router";

createApp(App).use(store).use(router).mount('#app')
