module.exports = {
  dest: 'docs',
  base: '/doc-restaurante/',
  title: 'Documentación Menú Restaurante',
  description: 'Documentación Proyecto Menú Restaurante',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Repo Doc',
        link: 'https://github.com/edwintorres1605/doc-restaurante'
      },
      {
        text: 'Repo Front',
        link: 'https://github.com/edwintorres1605/front-restaurante'
      },
      {
        text: 'Repo Back',
        link: 'https://github.com/edwintorres1605/back-restaurante'
      }
    ],
    sidebar: [
      '/',
      '/frontend/',
      '/backend/',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
