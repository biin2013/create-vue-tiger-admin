import { getLocalStorage, setLocalStorage } from '@biin2013/storage';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export const useLocaleStore = defineStore('config', () => {
  const localeStorageKey = 'locale';

  const locale = ref(getLocalStorage(localeStorageKey) || 'zh_CN');

  function setLocale(val: string) {
    locale.value = val;
    const i18n = useI18n();
    i18n.locale = locale;
    setLocalStorage(localeStorageKey, val);
  }

  return { locale, setLocale };
});
