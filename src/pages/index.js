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
            "linear-gradient(to bottom, #845ec2, #965dc0, #a75dbe, #b75cbb, #c55cb7, #db5dad, #ee61a1, #fc6895, #ff7a7f, #ff926d, #ffac61, #ffc75f)",
        }}
      >
        <div className="mb-20 text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-black">
            Pazaryeri
          </h1>
          <p className="text-3xl text-gray-800">
            Web site is under construction
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
