import React from "react"
import styles from "../styles/postcard.module.css"

const PostCard = ({ img, title, summary, date }) => {
  return (
    <div>
      <img className={styles.img} src={img.url} alt={img.alt} />
      <p className={styles.title}>{title}</p>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>{date}</p>
    </div>
  )
}

export default PostCard
