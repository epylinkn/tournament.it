module.exports = {
  siteMetadata: {
    title: 'Topple It | Tournaments for Everything',
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
