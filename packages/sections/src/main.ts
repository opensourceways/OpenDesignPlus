import { createApp } from 'vue';

import '@/assets/style/style.css';
import '@/assets/style/base.scss';
import '@/assets/style/theme/default-light.token.css';
import '@/assets/style/theme/dark.token.css';
import '@opensig/opendesign/es/index.css';
import App from './App.vue';
import i18n from './i18n';
import router from './router';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
