import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { prismicPortfolioPosts } }) => {
  const { data } = prismicPortfolioPosts
  return (
    <React.Fragment>
      <h1>{data.post_title.text}</h1>
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
          html
        }
        post_cover {
          alt
          copyright
          url
        }
        post_group {
          post_image {
            alt
            copyright
            url
          }
          post_content {
            html
            text
          }
        }
      }
    }
  }
`
