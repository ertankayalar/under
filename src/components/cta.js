import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ActionButton from "../components/action-button"

const cta = ({ title, message, buttonLink, buttonText }) => (
  <div className="w-full bg-white">
    <div className="container mx-auto text-center py-20 px-10">
      <h2 className="text-4xl text-gray-700">{title}</h2>
      <p className="text-2xl text-gray-600 my-5">{message}</p>
      <Link to={buttonLink} className="btn-outline">
        {buttonText}
      </Link>
    </div>
  </div>
)

cta.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}

cta.defaultProps = {
  title: ``,
  message: ``,
  buttonLink: `/contact/`,
  buttonText: `Contact Us`,
}

export default cta
