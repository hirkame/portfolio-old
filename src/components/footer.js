import React from "react"
import styles from "../styles/footer.module.css"
import { Link } from "gatsby"
import Container from "../components/container"

export default () => (
  <Container>
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.listoflists}>
          <p>CONTACT</p>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <a href="https://twitter.com/hirkame">Twitter</a>
            </li>
            <li className={styles.list}>
              <a href="https://www.linkedin.com/in/hiroki-kameyama/">
                Linkedin
              </a>
            </li>
            <li className={styles.list}>
              <a href="https://github.com/hirkame">Github</a>
            </li>
          </ul>
        </div>
        <div className={styles.listoflists}>
          <p>PAGES</p>
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
      </div>
    </div>
  </Container>
)
