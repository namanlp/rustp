module.exports = {
  plugins: [
        'gatsby-plugin-next-seo',
    {
      resolve: "smooth-doc",
      options: {
        name: "Rust Programming",
        description: "Providing Guides and ready to use codes in Rust Language",
        siteUrl: "https://rustp.org",
        author: "Naman Garg",
        githubRepositoryURL: "https://github.com/namanlp/rustp",
        sections: ['Introduction', '1. Basic Programs', '2. Number Theory', '2.1 Arithmetic Operations', '2.2 Factors of a Number', '2.3 Factorials', 'Reference'],
        twitterAccount: 'namanlp',
        docSearch: { appId: '9AFUK2OAFI', apiKey: '5e83557335cd2d4c93144517d309a790', indexName: 'rustp'   },
      },
    },
  ],
};
