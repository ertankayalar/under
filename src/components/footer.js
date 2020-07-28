import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../components/menu"


const Footer = ({ siteTitle }) => (

  <footer className="w-full">

     
  <div className="w-full py-1 bg-bluegray-800">
      <div className="container mx-auto text-gray-100">
          <p>
      © { siteTitle } 1998-{new Date().getFullYear()}. 
      {` `}
      All rights reserved.
     
      </p>

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
  