import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

export default () => (
  <div>
    <ul className="styles.lists">
      <li className="styles.list">
        <Link to="/profile/">Profile</Link>
      </li>
      <li className="styles.list">
        <Link to="/work/">Work</Link>
      </li>
      <li className="styles.list">
        <Link to="/posts/">Posts</Link>
      </li>
    </ul>
  </div>
)
