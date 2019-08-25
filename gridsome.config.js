module.exports = {
  siteName: `ぺんぎん工房`,
  titleTemplate: `%s - ぺんぎん工房`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'event/*.md',
        typeName: 'Event',
        route: '/event/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-125245425-3'
      }
    }
  ]
}
