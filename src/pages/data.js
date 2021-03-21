import React from "react"
import { graphql } from "gatsby"

const Data = ({ data }) => (
  <div>
    <div>{data.site.siteMetadata.title}</div>
    <div>{data.site.siteMetadata.description}</div>
  </div>
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
