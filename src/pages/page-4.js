import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FourthPage = ({ data }) => (
  <Layout>
    {data.allContentfulComposePage.edges.map((edge, index) => {
      return <div key={index}>{edge.node.title}</div>
    })}
  </Layout>
)

export const query = graphql`
  query {
    allContentfulComposePage {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default FourthPage
