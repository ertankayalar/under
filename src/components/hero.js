import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ActionButton from "../components/action-button"

const Hero = ({ siteTitle }) => (


<div className="w-full bg-gray-700 text-center">
<div className="container mx-auto  py-20">
  <h1 className="text-6xl font-light mt-20 text-gray-100">Size <span className="text-blue-200">Özel</span> Ürünler ve Hizmetler <span className="font-semibold text-blue-200s">Geliştiriyoruz</span></h1>
  <p className="text-2xl text-gray-300 font-light mb-20">
  Hayalinizdeki projenizi yaşayan <span className="text-blue-200">sonuçlara</span> dönüştürecek yazılım geliştirme ve tasarım ekibiyiz.
  </p>
  <ActionButton to="/iletisim/" title="Bizimle Çalışın" />
</div>
</div>


)
  
Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
