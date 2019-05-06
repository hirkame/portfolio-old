import React from "react"
import Container from "./container.js"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/profile.module.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container className="row">
        <div className="container fade">
          <Img
            className={`three columns ${styles.mobile_img} ${styles.img}`}
            fluid={data.file.childImageSharp.fluid}
            alt="map"
          />
          <div className={`${styles.passages} nine columns`}>
            <p>
              Since my first trip I have been to 7 countries within the African
              continent including(Kenya, Tanzania,Uganda,Rwanda, Burundi, Ghana
              and Egypt). Despite the many challenges I faced in travelling I
              have found each trip to be a priceless personal experience.
            </p>
            <p>
              My main focus as of now is in building developer ecosystems in
              Africa.
            </p>
            <p>
              The software industry in Africa is growing rapidly. The major
              concern today is the lack of talent.Unfortunately, there are few
              software professionals in the labour market. This is due mainly to
              unequal access to proper education and poor governance. To make
              matters worst the small number of software professionals which are
              produced tend to emigrate to Europe and the US seeking better
              opportunities.
            </p>
            <p>
              A possible solution to this issue is simply providing enough
              educational opportunities in software to a large number of young
              people. It is my hope that this will encourage the growth of a
              sustainable tech ecosystem of software professionals within
              Africa.
            </p>
          </div>
          <Img
            className={`three columns ${styles.img} ${styles.desktop_img}`}
            fluid={data.file.childImageSharp.fluid}
            alt="map"
          />
        </div>
      </Container>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
