module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  pages: {
    '*': ['common']
  },
  loadLocaleFrom: (lang, ns) => import(`./src/translations/${ns}/${lang}.json`).then(module => module.default)
};
