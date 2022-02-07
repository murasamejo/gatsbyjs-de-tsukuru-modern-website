require('dotenv').config();
const { resolve } = require('path');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `初めての GraphQL`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);

  return new Promise((resolve, _reject) => {
    graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
      result.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          path: `/post/${edge.node.slug}`,
          component: postTemplate,
          context: {
            slug: edge.node.slug,
          }
        })
      })
      resolve()
    })
  })
}
