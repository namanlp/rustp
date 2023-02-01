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
        sections: ['Introduction', '1. Number Theory', '1.1 Arithmetic Operations', '1.5 Factorials', 'Reference'],
        twitterAccount: 'namanlp',
      },
    },
  ],
};
