import React from "react"
import styles from "../styles/home.module.css"
import { graphql, StaticQuery } from "gatsby"
import Seo from "../components/seo"
import Img from "gatsby-image"
import Header from "../components/header"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <React.Fragment>
        <Seo />
        <Header />
        <div className={`${styles.indexContainer} fade`}>
          <h1 className={styles.greeting}>
            Hello! <br />I am{" "}
            <span className={styles.name}>Hiroki Kameyama</span>
            <br /> from Japan.{" "}
          </h1>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={styles.mountain}
            fadeIn={false}
            alt="mountain"
            style={{ position: "absolute" }}
          />
        </div>
      </React.Fragment>
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
