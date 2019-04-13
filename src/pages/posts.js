import React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/postcard"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

class Posts extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <Header />
        <div>
          {data.allPrismicPortfolioPosts.edges.map(postcard => (
            <li>
              <PostCard
                date={postcard.node.data.post_date.text}
                title={postcard.node.data.post_title.text}
                summary={postcard.node.data.post_summary.text}
              />
            </li>
          ))}
          {console.log(data.allPrismicPortfolioPosts.edges)}
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
