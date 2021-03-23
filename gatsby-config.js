require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "BCBSRI Annual Report 2021",
  },
  plugins: [   
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/BCBSRI_Logo-favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.GATSBY_TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-118674837-1", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('postcss-calc'),
          require('postcss-advanced-variables'),
          require('postcss-pxtorem'),
          require('postcss-mixins'),
          require('postcss-custom-media'),
        ]
      }
    },
  ],
};
