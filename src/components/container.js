import React from "react"
import containerStyles from "../styles/container.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
