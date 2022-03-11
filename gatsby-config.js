module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://gatsby-wordpress.jamesauble.com/graphql"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};