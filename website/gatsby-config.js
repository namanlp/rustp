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
        sections: ['1. Basic Programs', '2. Number Theory', '2.1 Arithmetic Operations', '2.2 Factors of a Number', '3 Combinatorics', '4 Data Structures', '5.1 Array Algorithms'],
        twitterAccount: 'namanlp',
        githubRepositoryURL: 'https://github.com/namanlp/rustp/',
        docSearch: { appId: '9AFUK2OAFI', apiKey: '5e83557335cd2d4c93144517d309a790', indexName: 'rustp'   },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-D0G3P087MQ", // Google Analytics
        ],
        gtagConfig: {
          anonymize_ip: true,
          // cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}
