const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: "Rust Programming",
        description: "Providing Guides and ready to use codes in Rust Language",
        siteUrl: "https://rustp.org",
        baseDirectory: path.resolve(__dirname, '../'),
        author: "Naman Garg",
        sections: ['Introduction', '1. Basic Programs', '2. Number Theory', '2.1 Arithmetic Operations', '2.2 Factors of a Number', '2.3 Factorials', 'Reference'],
        twitterAccount: 'namanlp',
        githubRepositoryURL: 'https://github.com/namanlp/rustp/',
        docSearch: { appId: '9AFUK2OAFI', apiKey: '5e83557335cd2d4c93144517d309a790', indexName: 'rustp'   },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-8B0V483RV8",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/home"],
        // defer: true,
      },
    },
  ],
}
