import React from "react"
import styles from "../styles/footer.module.css"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.footerColumnLeft}>
              <Img
                fixed={data.logo.childImageSharp.fixed}
                fadeIn={false}
                alt="logo"
              />
              <p className={styles.copyright}>
                Copyright
                <span role="img" aria-label="Copyright Sign">
                  ©
                </span>
                Hiroki Kameyama
              </p>
            </div>
            <div className={styles.footerColumnList}>
              <p className={styles.title}>CONTACT</p>
              <ul className={styles.list}>
                <li className={styles.listContent}>
                  <a href="https://twitter.com/hirkame">Twitter</a>
                </li>
                <li className={styles.listContent}>
                  <a href="https://www.linkedin.com/in/hiroki-kameyama/">
                    Linkedin
                  </a>
                </li>
                <li className={styles.listContent}>
                  <a href="https://github.com/hirkame">Github</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumnList}>
              <p className={styles.title}>PAGES</p>
              <ul className={styles.list}>
                <li className={styles.listContent}>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.listContent}>
                  <Link to="/profile/">Profile</Link>
                </li>
                <li className={styles.listContent}>
                  <Link to="/posts/">Posts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Img
          fluid={data.backgroundImg.childImageSharp.fluid}
          className={styles.backgroundImg}
          fadeIn={false}
          alt="mountain"
          style={{ position: "absolute" }}
        />
      </Container>
    )}
  />
)

const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 90, height: 37) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    backgroundImg: file(relativePath: { eq: "mountain.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 3000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
