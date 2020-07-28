import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

const ProductPage = () => (
  <Layout>
    <SEO title="About" />
  
    <div className="w-full bg-primary-500 text-white py-10">
            <div className="container mx-auto my-auto">
                <h1 className="text-4xl font-semibold">Products</h1>

            </div>
        </div>

        <div class="container mx-auto h-100 py-4">
            <div class="main prose-xl py-2 text-bluegray-600">
                <article class="mb-5">
                    <h1 class="my-2">Products</h1>
               
                </article>

            </div>
        </div>
  
    <CTA  title="Hazır mısınız ?" message="Web sitenizi geliştirmek için bize ulaşın" />
  </Layout>
)

export default ProductPage
