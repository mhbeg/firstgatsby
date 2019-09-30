import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hej</h1>
    <p>Min første hjemmeside</p>
    <p>Udforsk den.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Gå til side 2</Link>
    <br/>
    <Link to="/page-3/">Gå til side 3</Link>
    <br/>
    <Link to="/page-4">Gå til side 4 din na</Link>
  </Layout>
)

export default IndexPage
