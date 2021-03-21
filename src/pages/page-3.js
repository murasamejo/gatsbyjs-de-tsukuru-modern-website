import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>My First Component</h1>
    <Link to="/">Back to Home</Link>
  </Layout>
)
export default IndexPage
