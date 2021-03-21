import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Data = ({ data }) => (
  <Layout>
    <div>
      <div>{data.site.siteMetadata.title}</div>
      <div>{data.site.siteMetadata.description}</div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Data
