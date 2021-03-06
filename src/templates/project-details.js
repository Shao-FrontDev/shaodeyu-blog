import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Layout>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>

          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default ProjectDetails;

export const query = graphql`
  query page ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
      }
    }
  }
`;
