import React from "react"
import { graphql } from "gatsby"
import styles from "../../styles/post.module.css"
import Container from "../../components/container"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const Post = ({ data: { prismicPortfolioPosts } }) => {
  return (
    <React.Fragment>
      <Seo
        title={prismicPortfolioPosts.data.post_title.text}
        description={prismicPortfolioPosts.data.post_summary.text}
        pathname={prismicPortfolioPosts.uid}
        image={prismicPortfolioPosts.data.post_cover.url}
        article="true"
      />
      <Header />
      <Container>
        <Container>
          <div className={styles.container_for_post}>
            <p className={styles.date}>
              {prismicPortfolioPosts.data.post_date}
            </p>
            <h1 className={styles.title}>
              {prismicPortfolioPosts.data.post_title.text}
            </h1>
            <h4 className={styles.summary}>
              {prismicPortfolioPosts.data.post_summary.text}
            </h4>
            <div className={styles.cover_container}>
              <img
                className={styles.cover}
                src={prismicPortfolioPosts.data.post_cover.url}
                alt={prismicPortfolioPosts.data.post_cover.alt}
              />
            </div>
            <p className={styles.cover_desc}>
              {prismicPortfolioPosts.data.post_image_desc.text}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: prismicPortfolioPosts.data.post_text.html,
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
  query PostBySlug($uid: String) {
    prismicPortfolioPosts(uid: { eq: $uid }) {
      uid
      data {
        post_image_desc {
          text
        }
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
