import React from "react"
import styles from "../styles/header.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div className={styles.header}>
    <div>{/* <Img fixed={data.file.childImageSharp.fixed} /> */}</div>
    <ul className={styles.lists}>
      <li className={styles.list}>
        <Link to="/profile/">Profile</Link>
      </li>
      <li className={styles.list}>
        <Link to="/work/">Work</Link>
      </li>
      <li className={styles.list}>
        <Link to="/posts/">Posts</Link>
      </li>
    </ul>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
