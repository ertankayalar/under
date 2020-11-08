import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../components/menu"

const Footer = ({ siteTitle }) => (
  <footer className="w-full">
    <div className="w-full py-5 bottom-0 fixed bg-gray-100 text-gray-800 text-sm md:text-md">
      <div className="container mx-auto  flex items-center justify-around">
        <span>
          © {siteTitle} 1998-{new Date().getFullYear()}.{` `}
          All rights reserved.
        </span>
        <Link to="https://erkasoft.com" className="text-blue-800">
          <a>Erkasoft</a>
        </Link>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
