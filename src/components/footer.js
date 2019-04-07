import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className>
    <ul>
      <li>
        <Link to="/profile/">Profile</Link>
      </li>
      <li>
        <Link to="/work/">Work</Link>
      </li>
      <li>
        <Link to="/posts/">Posts</Link>
      </li>
    </ul>
  </div>
)
