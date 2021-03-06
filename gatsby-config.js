require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `GRS GPTC Perinthalmanna`,
    description: `Government Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.`,
    author: `@amjed-ali-k`,
    siteUrl: `https://grs.gptcperinthalmanna.in`,
  },
  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        sampleRate: 0.7,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grs-gptc-perinthalmanna`,
        short_name: `grs-gptcpmna`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
