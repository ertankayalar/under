import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTA from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero siteTitle="Gatsby Boilerplate" />
    <h1>Gatsby Boilerplate</h1>
    
    <CTA to="/iletisim/" title="Hazır mısınız ?" message="Web sitenizi geliştirmek için bize ulaşın" />
  </Layout>
)

export default IndexPage
