import React from "react"
import styles from "../styles/header.module.css"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Github from "../img/github.svg"
import Twitter from "../img/twitter.svg"
import Linkedin from "../img/linkedin.svg"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className={styles.header}>
        <div className="container">
          <div className={styles.logo}>
            <Link to="/">
              <Img
                fixed={data.file.childImageSharp.fixed}
                critical={true}
                fadeIn={false}
                alt="logo"
              />
            </Link>
          </div>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.link} to="/profile/">
                Profile
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.link} to="/posts/">
                Posts
              </Link>
            </li>
          </ul>
          <div className={styles.logo}>
            {/* Twitter: Turn it into "1DA1F2" */}
            <a href="https://twitter.com/hirkame">
              <Twitter
                style={{
                  height: `30px`,
                  display: `block`,
                  margin: `0 5px`,
                }}
              />
            </a>
            {/* GitHub: Turn it into "161614" */}
            <a href="https://github.com/hirkame/">
              <Github
                style={{
                  height: `30px`,
                  display: `block`,
                  margin: `0 5px`,
                }}
              />
            </a>
          </div>

          {/* MOBILE */}
          <div className={styles.mobile_nav}>
            <label htmlFor="label1" className={styles.nomargin}>
              <span className={styles.nav_icon} />
            </label>
            <input type="checkbox" id="label1" className={styles.input} />
            <div className={styles.hidden_show}>
              <div className="container">
                <div className={styles.mobile_logo}>
                  <Link to="/">
                    <Img
                      fixed={data.file.childImageSharp.fixed}
                      critical={true}
                      fadeIn={false}
                      alt="logo"
                    />
                  </Link>
                </div>
                <ul className={styles.mobile_lists}>
                  <li className={styles.mobile_list}>
                    <Link className={styles.link} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={styles.mobile_list}>
                    <Link className={styles.link} to="/profile/">
                      Profile
                    </Link>
                  </li>
                  <li className={styles.mobile_list}>
                    <Link className={styles.link} to="/posts/">
                      Posts
                    </Link>
                  </li>
                </ul>
                <ul className={styles.mobile_contact}>
                  <li>
                    <a
                      className={styles.link}
                      href="https://twitter.com/hirkame"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.link}
                      href="https://www.linkedin.com/in/hiroki-kameyama/"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.link}
                      href="https://github.com/hirkame"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 90, height: 37) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
