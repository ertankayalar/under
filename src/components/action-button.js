import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const ActionButton = ({ to, title, className }) => (

  <Link to={ to } className={ className }> { title } </Link>
)

ActionButton.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string
  }
  
  ActionButton.defaultProps = {
    to: `/`,
    title: `Başla`,
    className: `bg-blue-700 text-white text-2xl font-semibold py-5 px-10 rounded hover:bg-blue-200 hover:text-gray-700`
  }
  

export default ActionButton
