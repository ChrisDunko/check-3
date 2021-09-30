import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/normalize.css';
import './styles/dragoneyes.css';
import './styles/check3.css';

createApp(App).use(store).use(router).mount('#app')
