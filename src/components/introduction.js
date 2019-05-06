import React from "react"
import Container from "./container.js"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/profile.module.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <div className="container fade">
          <Img
            className={`three columns ${styles.img}`}
            fluid={data.file.childImageSharp.fluid}
            alt="profile photo"
          />
          <div className={`${styles.passages} nine columns`}>
            <p>
              I'm Hiroki,a university student,business strategist and community
              builder based in Japan.{" "}
              <span role="img" aria-label="japan">
                🇯🇵
              </span>{" "}
              I am currently studying sociology at The University of Tokyo and
              working at Progate as the Regional Manager of Africa. Alongside my
              academic studies I do Web/App design, front-end coding, business
              management, and market analysis. As of now I am focused on
              building tech communities in Africa.
            </p>
            <p>My interest in Africa began via strange circumstances. </p>
            <p>
              I played the saxophone as a high school student and fell deeply in
              love with JAZZ and FUNK music. I was mesmerized by the groove,
              rhythm and bass. My curiosity led me to digging into the origins
              of the sound, Africa, and in 2016 I traveled to Kenya,Tanzania and
              Ghana. In Africa I met tech entrepreneurs marking the beginning of
              my involvement within the African tech community.
            </p>
          </div>
        </div>
      </Container>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
