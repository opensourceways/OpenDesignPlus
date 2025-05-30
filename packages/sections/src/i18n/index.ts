import { createI18n, type I18nOptions } from 'vue-i18n';

import { getCurrentLocale } from '@/utils/locale';

import footer from './footer';

const locale = getCurrentLocale();

const messages = {
  zh: {
    footer: footer.zh,
  },
  en: {
    footer: footer.en,
  },
};

const i18n = createI18n({
  globalInjection: true,
  locale,
  legacy: false,
  fallbackLocale: 'zh',
  messages,
});

export default i18n;
