import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"

const RedString = styled.div`
  color: red;
  font-size: 20px;
`

const IndexPage = () => (
  <RedString>
    <Layout>
      <h1>My First Component</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  </RedString>
)

export default IndexPage
