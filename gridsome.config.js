module.exports = {
  siteName: `www.lab-dev.net`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'event/*.md',
        typeName: 'Event',
        route: '/event/:slug'
      }
    }
  ]
}
