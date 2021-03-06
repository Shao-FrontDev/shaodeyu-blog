import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

export default function Projects({ data }) {
  console.log(data);
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <div className={styles.projects}>
          {projects.map((project) => {
            return (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <h3> {project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`;
