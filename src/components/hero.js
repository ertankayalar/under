import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Hero = ({ heroTitle, heroMessage, buttonLink, buttonText }) => (

  <div className="w-full bg-gray-100 h-auto">
  <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl py-10 text-brown-500">{ heroTitle }</h1>
      <p className="text-2xl text-gray-500 py-10">{ heroMessage }</p>
      <Link to={ buttonLink } className="btn">{ buttonText }</Link>
  </div>
</div>




)
  
Hero.propTypes = {
  heroTitle: PropTypes.string,
  heroMessage: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string
}

Hero.defaultProps = {
  heroTitle: `Value Proposition`,
  heroMessage: `We are ready for your requests`,
  buttonLink: `/`,
  buttonText: `Contact Us`
}

export default Hero
