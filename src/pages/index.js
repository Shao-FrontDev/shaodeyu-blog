import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>UX designer</p>
          <Link className={styles.btn} to='/projects'>
            My Portfolio
          </Link>
          <p></p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
