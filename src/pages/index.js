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
            "linear-gradient(to left, #715066, #81566c, #905c71, #a06274, #b06876)",
        }}
      >
        <div className="mb-20 text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-white">
            Trade Catalog
          </h1>
          <p className="text-3xl text-gray-900">
            Web site is under construction
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
