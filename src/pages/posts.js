import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
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
        <Seo />
        <Header />
        <div className="container fade">
          <div className={styles.posts}>
            {data.allPrismicPortfolioPosts.edges.map((post, index) => {
              const postData = post.node.data
              return (
                <PostCard
                  key={index}
                  uid={post.node.uid}
                  img={postData.post_cover}
                  title={postData.post_title.text}
                  summary={postData.post_summary.text}
                  date={postData.post_date}
                />
              )
            })}
          </div>
        </div>
        <Container>
          <Footer />
        </Container>
      </React.Fragment>
    )
  }
}

export default Posts

export const pageQuery = graphql`
  query {
    allPrismicPortfolioPosts {
      edges {
        node {
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
          }
        }
      }
    }
  }
`
