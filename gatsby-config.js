module.exports = {
  siteMetadata: {
    title: "BCBSRI Annual Report 2021",
  },
  plugins: [   
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('postcss-calc'),
        ]
      }
    },
  ],
};
