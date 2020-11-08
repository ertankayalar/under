import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ menuClassName, itemClassName }) => (
  <div className="md:col-span-2 py-5 hidden md:block" id="menu">
    <ul className="flex flex-wrap md:justify-end">
      <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
)

Menu.propTypes = {
  menuClassName: PropTypes.string,
  itemClassName: PropTypes.string,
}

Menu.defaultProps = {
  menuClassName: `flex items-stretch md:items-baseline`,
  itemClassName: `block py-2 px-4 text-gray-600 hover:text-gray-700`,
}

export default Menu
