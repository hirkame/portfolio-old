import React from "react"
import { Link } from "gatsby"
import styles from "../styles/postcard.module.css"

class PostCard extends React.Component {
  render() {
    const { uid, img, title, summary, date } = this.props
    return (
      <div className={styles.post}>
        <Link to={`/posts/${uid}/`}>
          <img className={styles.img} src={img.url} alt={img.alt} />
          <p className={styles.title}>{title}</p>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.date}>{date}</p>
        </Link>
      </div>
    )
  }
}

export default PostCard
