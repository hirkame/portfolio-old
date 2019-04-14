import React from "react"
import { Link } from "gatsby"
import styles from "../styles/postcard.module.css"

const PostCard = ({ uid, img, title, summary, date }) => {
  return (
    <Link to={`/${uid}/`}>
      <img className={styles.img} src={img.url} alt={img.alt} />
      <p className={styles.title}>{title}</p>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>{date}</p>
    </Link>
  )
}

export default PostCard
