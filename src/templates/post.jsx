import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/post.module.css"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

const Post = ({ data: { prismicPortfolioPosts } }) => {
  const { data } = prismicPortfolioPosts

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Container>
          <div className="container">
            <p className={styles.date}>{data.post_date}</p>
            <h1 className={styles.title}>{data.post_title.text}</h1>
            <h4 className={styles.summary}>{data.post_summary.text}</h4>
            <img
              className={styles.cover}
              src={data.post_cover.url}
              alt={data.post_cover.alt}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: data.post_text.html,
              }}
              className={styles.text}
            />
          </div>
        </Container>
      </Container>
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPortfolioPosts(uid: { eq: $uid }) {
      uid
      data {
        post_date
        post_title {
          text
        }
        post_summary {
          text
        }
        post_cover {
          alt
          copyright
          url
        }
        post_text {
          html
        }
      }
    }
  }
`