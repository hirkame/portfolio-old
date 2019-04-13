import React from "react"

const PostCard = ({ title, summary }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{summary}</p>
    </div>
  )
}

export default PostCard
