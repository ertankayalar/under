import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../components/menu"


const Footer = ({ siteTitle }) => (


    <footer class="bg-gray-200 text-gray-700 w-full">
          <Menu menuClassName="container flex justify-center mx-auto p-10" itemClassName="block py-2 px-4 text-gray-600 hover:text-gray-700" />
    
    <div className="container flex justify-center mx-auto p-10">
      <p>
      © { siteTitle } 1998-{new Date().getFullYear()}. 
      {` `}
       Tüm hakları saklıdır.
     
      </p>


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
  