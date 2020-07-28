import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Contact US" />
  
    <div className="w-full bg-primary-500 text-white py-10">
            <div className="container mx-auto my-auto">
                <h1 className="text-4xl font-semibold">Contact Us</h1>

              
            </div>
        </div>

        <div class="container mx-auto h-100 py-4">
            <div class="main py-2 ">
            <article class="text-gray-700 mb-5">
                    <div class="w-full text-center py-4">
                        <svg class="h-12 w-12 text-gray-400 mx-auto" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>

                        <h3 class="font-medium text-2xl text-gray-500">Telefon</h3>
                        <p class="text-gray-600 text-xl">+90 541 741 49 17</p>

                    </div>

                    <div class="w-full text-center py-4">

                        <svg class="h-12 w-12 text-gray-400 mx-auto"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>

                        <h3 class="font-medium text-2xl text-gray-500 mt-1 mb-1">Eposta</h3>
                        <p class="text-gray-600 text-xl">info[at]erkasoft.com</p>
                    </div>


                    <div class="w-full text-center py-4">
                        
                        <svg class="h-12 w-12 text-gray-400 mx-auto"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <h3 class="text-2xl font-medium text-gray-500 mb-1">Posta Adresi</h3>
    
                            <h2 class="text-sm text-gray-600 text-lg">Değirmenönü Mh 1476 Sk No:13 Da: 14</h2>
                            <h2 class="text-sm text-gray-600 text-lg">Denizli, TÜRKİYE 20010</h2>
                    </div>
              



    
                </article>

            </div>
        </div>
  
  </Layout>
)

export default AboutPage
