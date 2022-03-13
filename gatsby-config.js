module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://localhost:8000`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://gatsby-wordpress.jamesauble.com/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
};
