import React from "react"
import styles from "../styles/header.module.css"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Github from "../img/github.svg"
import Twitter from "../img/twitter.svg"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className={styles.header}>
        <HeaderDefault data={data.file.childImageSharp.fixed} />
        <HeaderMobile data={data.file.childImageSharp.fixed} />
      </div>
    )}
  />
)

const HeaderDefault = ({ data }) => (
  <>
    <div className="container">
      <div className={styles.logo}>
        <Link to="/">
          <Img fixed={data} fadeIn={false} alt="logo" />
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
    </div>

    <div className={styles.social_media}>
      {/* Twitter: Turn it into "1DA1F2" */}
      <a href="https://twitter.com/hirkame" className={styles.twitter}>
        <Twitter
          style={{
            height: `25px`,
            width: `25px`,
            display: `block`,
            margin: `0 25px 0 0`,
          }}
        />
      </a>
      {/* GitHub: Turn it into "161614" */}
      <a href="https://github.com/hirkame/" className={styles.github}>
        <Github
          style={{
            height: `25px`,
            width: `25px`,
            display: `block`,
          }}
        />
      </a>
    </div>
  </>
)

const HeaderMobile = ({ data }) => (
  <div className="container">
    <div className={styles.mobile_nav}>
      <label htmlFor="label1" className={styles.nomargin}>
        <span className={styles.nav_icon} />
      </label>
      <input type="checkbox" id="label1" className={styles.input} />
      <div className={styles.hidden_show}>
        <div className="container">
          <div className={styles.mobile_logo}>
            <Link to="/">
              <Img fixed={data} fadeIn={false} alt="logo" />
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
        </div>
      </div>
    </div>
  </div>
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
