const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Forest Valley Robotics',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://robotics.fv.dev',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        types: path.join(__dirname, 'src/types'),
        layouts: path.join(__dirname, 'src/layouts'),
        assets: path.join(__dirname, 'src/assets'),
        icons: path.join(__dirname, 'src/icons'),
        fonts: path.join(__dirname, 'src/fonts'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preload-fonts',
  ],
};
