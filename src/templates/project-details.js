import React from "react";
import Layout from "../components/Layout";

import * as styles from "../styles/project-details.module.css";

export default function ProjectDetails() {
  return (
    <div>
      <Layout>
        <div className={styles.details}>
          <h2>title</h2>
          <h3>Stack</h3>

          {/* <div className={styles.html} dangerouslySetInnerHTML={}/> */}
        </div>
      </Layout>
    </div>
  );
}
