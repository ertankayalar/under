import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact-form"


const Iletisim = () => (
  <Layout>
    <SEO title="Erkasoft İletişim" />
    <div className="w-full bg-gray-700 text-gray-100 px-20">
        <div className="container mx-auto py-20">
                <div className="row text-center">
                    <h1 className="text-6xl">Nasıl <span className="text-blue-200  font-bold">Yardım</span> edebiliriz ?</h1>
                    <p className="text-3xl font-light">
                    Etkileyici sonuçlar için <span class="text-blue-200">özel</span> yazılım geliştirme
                    </p>
                </div>

        </div>

    </div>

    <div className="w-full bg-gray-200 px-20">
        <div className="container mx-auto py-20">
        <div className="flex text-center text-gray-700">
        <div className="w-1/2 text-gray-700">

            <h3 className="font-medium text-md mt-1 mb-1">Telefon</h3>
            <p className="text-gray-600">+90 541 741 49 17</p>

            <h3 className="font-medium text-md mt-1 mb-1">Eposta</h3>
            <p className="text-gray-600">info[at]erkasoft.com</p>
    
            <h3 className="text-md font-medium  mb-1">Posta Adresi</h3>

            <h2 className="text-sm text-gray-600">Değirmenönü Mh 1476 Sk No:13 Da: 14</h2>
            <h2 className="text-sm text-gray-600">Denizli, TÜRKİYE 20010</h2>
        </div>
        <div className="w-1/2">
        
        <ContactForm title="Haydi Projenizi Konuşalım!" />

        </div>


        </div>

        </div>

    </div>

    
  </Layout>
)

export default Iletisim
