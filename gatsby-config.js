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
        sections: ['Introduction', '1. Basic Programs', '2. Number Theory', '2.1 Arithmetic Operations', '2.5 Factorials', 'Reference'],
        twitterAccount: 'namanlp',
      },
    },
  ],
};
