import '@/assets/main.css';
import App from '@/config/appEntry';
import serviceProviderHandler from '@/providers/handler';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

const app = createApp(App);

app.use(createPinia());

serviceProviderHandler(app);

app.mount('#app');
