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
  ],
}
