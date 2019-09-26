import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Habibi tryk på side 3</h1>
    <p>Ikk spørg hvorfor, bare gør det</p>
    <Link to="/">Gå tilbage din na</Link>
  </Layout>
)

export default SecondPage
