module.exports = {
  siteMetadata: {
    title: `chriskjaer.dk`,
    description: `Creative Developer, Software Engineer, Co-Founder of Gaest.com. I code stuff and make it pretty.`,
    author: `@ckjaer`,
  },
  pathPrefix: '/chriskjaer',
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chriskjaer.dk`,
        short_name: `chriskjaer`,
        start_url: `/`,
        background_color: `#24201a`,
        theme_color: `#24201a`,
        display: `minimal-ui`,
        icon: `src/images/chriskjaer-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
