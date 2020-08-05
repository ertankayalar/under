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
    <Hero heroTitle="Gatsby Boilerplate" heroMessage="" buttonLink="/contact/" buttonText="Act Now" />
    

    <div className="w-full bg-bluegray-400 py-20 text-center text-gray-100">

  
    </div>
    <div className="w-full bg-bluegray-400 py-20 text-center text-gray-100">
            <div className="container mx-auto my-10">

                <h2 className="text-4xl font-semibold py-5">About US</h2>
                <p className="py-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam est dolores eius laudantium expedita aliquid fugit hic aperiam. Culpa, quas. Officia aut asperiores dolores expedita voluptate aperiam obcaecati minima.</p>
            </div>
        </div>
    <CTA  title="Hazır mısınız ?" message="Web sitenizi geliştirmek için bize ulaşın" />
  </Layout>
)

export default IndexPage
