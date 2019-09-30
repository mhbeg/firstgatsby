import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video" 

const side4 = () => (
  <Layout>
    <SEO title="Page four" />
    <section>
    <h1>Hvorfor har du trykket på side 4?</h1>
    <br/>
    <p>Hop ud af Burj Khalifa med dig, uden faldskærm</p>
    <p>Se den her video habibi</p>
    <iframe title = "Hej" width="560" height="315" src="https://www.youtube.com/embed/xr5h_qE8gZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Video
        videoSrcURL="https://www.youtube.com/watch?v=xr5h_qE8gZ8"
        videoTitle="Tranquility"
      />
    </section>
    <Link to="/">Gå tilbage din na</Link>

    
  </Layout>
)

export default side4
