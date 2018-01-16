module.exports = {
  siteMetadata: {
    title: 'ToppleIt | Tournaments for Everything',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ],
};
