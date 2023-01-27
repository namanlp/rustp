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
        sections: ['Introduction', 'Number Theory', 'Components', 'Reference'],
        twitterAccount: 'namanlp',
      },
    },
  ],
};
