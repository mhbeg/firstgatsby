import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./bulma.css"

function beregn(){

const km = document.getElementById("km").value;
const gco2 = km * 500;

if(gco2 > 2000) {
document.getElementById("aftryk").innerHTML = "Dit CO2 aftryk er allerede på: " + gco2 + "g/co2 (habibi tænk på klimaet, tager du pis på mig?)"
document.getElementById("info").classList.remove("is-primary")
document.getElementById("info").classList.add("is-danger")

} else {
document.getElementById("aftryk").innerHTML = "Dit CO2 aftryk er foreløbig kun " + gco2 + "g/co2 (orale brors du tænker på miljøet)"
document.getElementById("info").classList.add("is-primary")
document.getElementById("info").classList.remove("is-danger")

}
}

const side3 = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>CO2 Beregner din na</h1>
    <section id ="info" class="hero is-primary">
    <p id = "aftryk">Dit CO2 aftryk er på: 0g </p>
    <br/>
    </section>
    <input type = "text" class="input is-primary" id = "km"/> 
    <button onClick={beregn}>klik mig din na</button>
    <Link to="/">Gå tilbage din na</Link>
  </Layout>
)

export default side3
