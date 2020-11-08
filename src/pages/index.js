import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ siteTitle }) => {
  return (
    <Layout>
      <SEO title="Wellcome" />
      <div
        className="w-full h-screen bg-gray-300 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        }}
      >
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Hotel Catalog
          </h1>
          <p className="text-3xl text-primary-200">
            Web site is under construction
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
