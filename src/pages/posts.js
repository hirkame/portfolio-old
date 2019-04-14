import React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/postcard"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/posts.module.css"

class Posts extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <Header />
        <div className={`${styles.posts} container`}>
          {data.allPrismicPortfolioPosts.edges.map(post => {
            const postData = post.node.data
            return (
              <li className={styles.post}>
                <PostCard
                  img={postData.post_cover}
                  title={postData.post_title.text}
                  summary={postData.post_summary.text}
                  date={postData.post_date.text}
                />
              </li>
            )
          })}
        </div>
        <Container>
          <Footer />
        </Container>
      </React.Fragment >
    )
  }
}

export default Posts

export const pageQuery = graphql`
  query {
    allPrismicPortfolioPosts {
      edges {
        node {
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
          }
        }
      }
    }
  }
`
