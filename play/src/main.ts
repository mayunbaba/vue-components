import { createApp } from 'vue';
import WHIcon from '@wh/components/icon';
import '@wh/theme-chalk/src/index.scss';
import App from './App.vue';

createApp(App)
  .use(WHIcon)
  .mount('#app');
