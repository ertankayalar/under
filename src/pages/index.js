import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ siteTitle }) => {
  return (
    <Layout>
      <SEO title="Hoşgeldiniz" />
      <div
        className="w-full h-screen bg-gray-300 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to left bottom, #7a02df, #d400ae, #fa007f, #ff425b, #ff7b48)",
        }}
      >
        <div className="mb-20 text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-white">
            Ticaret Sitesi
          </h1>
          <p className="text-3xl text-gray-900">Tasarım aşamasında</p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
