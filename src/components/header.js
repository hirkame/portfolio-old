import React from "react"
import styles from "../styles/header.module.css"
import { Link } from "gatsby"

export default () => (
  <div className={styles.header}>
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
)
