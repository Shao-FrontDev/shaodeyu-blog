import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  const { description } = data.site.siteMetadata;
  return (
    <nav>
      <div className='info'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className='links'>
        <Link to='/'>Articles</Link>
        <Link to='/projects'>Projects</Link>
      </div>
    </nav>
  );
}
