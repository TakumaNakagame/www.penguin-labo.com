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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'event/ebook/*.md',
        typeName: 'Ebook',
        route: '/event/:event/ebook'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-125245425-3'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
