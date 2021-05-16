const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ProjectsPage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: "/projects/" + slug,
      component: path.resolve(
        "./src/templates/project-details.js"
      ),
      context: { slug: slug },
    });
  });
};
