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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-D0G3P087MQ", // Google Analytics / GA
        ],
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          // cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}
