module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home']
  },
  loadLocaleFrom: (lang, ns) => import(`./src/locales/${lang}/${ns}.json`).then(module => module.default)
};
