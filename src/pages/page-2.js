import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const SecondPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      const author = edge.node.author
      return <div>
        <h2>{edge.node.title}</h2>
        {/* avatar は空のときもあるので三項演算子で処理する */}
        {edge.node.author.avatar &&
          <img width={40} src={author.avatar} alt={author.name} />
        }
        <small>{author.name}</small>
        <p>{edge.node.content.content}</p>
      </div>
    })}
    {data.allContentfulPost.edges.map(edge => {
      return <div>
        <Link to={`/post/${edge.node.slug}`}>{edge.node.title}</Link>
      </div>
    })}
  </Layout>
)

export const query = graphql`
{
  allContentfulPost {
    edges {
      node {
        title
        slug
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
      }
    }
  }
}
`

export default SecondPage
