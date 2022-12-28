import providers from '@/config/provider';
import { useLocaleStore } from '@/stores/locale';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';

export default function (app: App): void {
  const localeStore = useLocaleStore();
  const messages = {};
  const routes: any = [];
  providers.forEach(p => {
    Object.assign(messages, p.locales());
    routes.push(...p.routers());
  });

  const i18n = createI18n({
    legacy: false,
    locale: localeStore.locale,
    messages
  });

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

  app.use(i18n);
  app.use(router);

  providers.forEach(p => p.boot(app));
}
