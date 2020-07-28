import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTA from "../components/cta"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
  
    <div className="w-full bg-primary-500 text-white py-10">
            <div className="container mx-auto my-auto">
                <h1 className="text-4xl font-semibold">About - Page Full Width</h1>

                <div className="block py-3 -ml-3 text-sm font-light">
                    <a href="#" className="hover:bg-indigo-600 py-2 px-3 rounded">Home</a> <span className="px-2">/</span>
                    <a href="#" className="hover:bg-indigo-600 py-2 px-3 rounded">Parent</a> <span className="px-2">/</span>
                    <span className="text-gray-300">Here</span>
                </div>


                <p className="text-lg font-normal">Açıklama Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            </div>
        </div>

        <div class="container mx-auto h-100 py-4">
            <div class="main prose-xl py-2 text-bluegray-600">
                <article class="mb-5">
                    <h1 class="my-2">Page Full width</h1>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi tenetur ipsam atque minus dolore? Fugiat, minima excepturi quasi, placeat quis, culpa aspernatur unde voluptatum cum nobis vitae ab impedit.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quod delectus saepe nostrum perspiciatis cum tempore placeat enim blanditiis ut, repellendus dicta fuga ea quas hic adipisci cupiditate. Consequatur, numquam.</p>
                
                    <h2>Başlık 2</h2>
    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae ducimus fugiat officia, dignissimos tempore aspernatur eum eligendi eveniet necessitatibus sit dolorem officiis asperiores ea placeat praesentium. Dignissimos, fugiat rem.</p>
    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta similique accusamus veniam cupiditate eligendi error laboriosam harum sunt, cumque laudantium, minima et hic quidem iusto, fugiat molestiae! Alias, repudiandae eum!</p>
                    <p>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus ab enim architecto blanditiis fuga? Obcaecati, numquam ea. Beatae eligendi debitis officia asperiores et totam corporis doloremque distinctio magnam unde.</span>
                        <span>Deserunt aut necessitatibus maxime fugit ipsam dolorum rerum incidunt ea id beatae. Maiores, officia dolore laudantium debitis quibusdam nostrum vitae nobis pariatur excepturi incidunt odit dolor consectetur dolores sapiente reprehenderit.</span>
                        <span>Quia cupiditate a officiis itaque ipsum placeat quas cumque dignissimos non, accusantium inventore architecto eveniet? Velit quo, voluptates, animi aliquam sapiente harum expedita optio sit, officiis illum atque inventore reprehenderit.</span>
                        <span>Laboriosam officiis consequatur veniam eum et sed quas dolor laudantium! Architecto laborum repellat sapiente, nesciunt earum sit eius, quos, nemo eos consectetur in placeat. Fugiat officia modi enim deserunt iure?</span>
                        <span>Quod, facilis sit! Voluptates consequatur impedit ex repellendus distinctio architecto eius provident laborum in beatae quisquam quis voluptatibus sapiente praesentium quod sequi, commodi sunt suscipit quibusdam placeat fuga hic ducimus.</span>
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid fugit labore corporis asperiores facere sint tempore assumenda autem repellendus minus possimus voluptate cupiditate, veritatis nisi voluptates placeat laborum eaque?</p>
                    <p>Tenetur quam eligendi non, tempore consequatur eos distinctio deleniti explicabo laudantium perferendis id ad est commodi sunt aliquam, ut enim veritatis nihil deserunt modi inventore earum consectetur. Repellat, iste hic?</p>
                    <h3>Başlık 3</h3>
                    <p>Consequatur nam libero, distinctio beatae veritatis officiis aliquid repudiandae. Iste nesciunt, quasi amet nostrum eos dolorum incidunt sunt, nulla quaerat accusamus dicta provident quibusdam, aperiam officiis sequi facere ea quos!</p>
                    <p>Doloribus, vitae! Voluptatem fugiat impedit ex iste ipsam! Porro eos quidem in at tenetur quam obcaecati natus eum sunt vero minima dignissimos labore, perspiciatis dolor, ut modi laboriosam sit odio?</p>
                    <p>Itaque blanditiis quibusdam alias, optio commodi fugiat aperiam? At voluptas quibusdam quam voluptatibus nihil minus. Odit facilis quisquam nam amet hic aut illo molestiae corrupti aliquam. Maiores necessitatibus fugit nam.</p>
                </article>

            </div>
        </div>
  
    <CTA  title="Hazır mısınız ?" message="Web sitenizi geliştirmek için bize ulaşın" />
  </Layout>
)

export default AboutPage
