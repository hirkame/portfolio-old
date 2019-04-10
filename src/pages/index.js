import React from "react"
import styles from "../styles/home.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import Header from "../components/header"

// export default () => (
//   <div>
//     <Header />
//     <h1>
//       Hello! <br />I am Hiroki Kameyama from Japan.{" "}
//     </h1>
//     <Img
//       fixed={data.file.childImageSharp.fluid}
//       fadeIn={false}
//       alt="mountain"
//       style={{ position: "absolute" }}
//     />
//   </div>
// )

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Header />
        <div className={styles.indexContainer}>
          <h1 className={styles.greeting}>
            Hello! <br />I am Hiroki Kameyama from Japan.{" "}
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
