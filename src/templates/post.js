import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Post = props => {
  const post = props.data.contentfulPost
  const author = post.author
  const avatar = author.avatar

  // published_at カラムは publishedAt になることに注意する
  return (
    <Layout>
      <h1>{post.title}</h1>
      {avatar && (
        <img width={40} src={avatar} alt={author.name} />
      )}
      <small>
        {author.name} | {post.publishedAt}
      </small>
      <div>{post.content.content}</div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        content
      }
      author {
        name
        description {
          description
        }
        avatar
      }
      publishedAt(formatString: "YYYY-MM-DD")
    }
  }
`
