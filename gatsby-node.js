const path = require('path');

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
