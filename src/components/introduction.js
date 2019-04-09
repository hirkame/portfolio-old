import React from "react"
import Container from "./container.js"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <div className="container">
          <Img
            className="three columns"
            fluid={data.file.childImageSharp.fluid}
            alt="profile photo"
          />
          <div className="nine columns">
            <p>
              I am Hiroki, a university student, business strategist and
              community builder based in Japan.
              <span role="img" aria-label="japan">
                🇯🇵
              </span>{" "}
              I am studying sociology in University of Tokyo, working for
              Progate as the Regional Manager of Africa. I do academic
              activities, Web/App design, front-end coding, business management,
              community development, market analysis or so on... Currently, I
              focus on building tech communities in Africa.
            </p>
            <p>
              I got interested in African tech scene by a strange coincidence.{" "}
            </p>
            <p>
              I played saxophone when I was a high school student and suddenly
              fell in love with JAZZ and FUNK music. I got a shock when I felt
              their groove and rhythm and bass. And I started to be attracted by
              their very origin, “Africa.” So, I flied to Kenya, Tanzania and
              Ghana in 2016. And I met some tech entrepreneurs in these
              countries. That is how I got involved in Africa and its tech
              community.
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
