import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../components/menu"

const Header = ({ siteTitle }) => (


  <header className="w-full  bg-gray-200">
  <div className="container mx-auto flex justify-between py-3 text-gray-700">
      <div>
       
        <span className="block text-3xl">
        <Link to="/"> {siteTitle} </Link>
        </span>
      </div>
        <Menu />
  </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
