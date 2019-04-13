import React from "react"
import styles from "../styles/home.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Header />
        <div className={styles.indexContainer}>
          <h1 className={styles.greeting}>
            Hello! <br />I am{" "}
            <span className={styles.name}>Hiroki Kameyama</span> from Japan.{" "}
          </h1>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={styles.mountain}
            fadeIn={false}
            alt="mountain"
            style={{ position: "absolute" }}
          />
        </div>
      </div>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "mountain.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 3000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
