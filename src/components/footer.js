import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../components/menu"


const Footer = ({ siteTitle }) => (

  <footer className="bg-bluegray-100 w-full">
  <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-3 text-gray-800">
          <div>
              <h4 className="text-xl">Widget 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam enim pariatur quae harum expedita! Laudantium odio ipsum consequatur commodi voluptatum quae tenetur placeat, consequuntur ea officiis nobis obcaecati inventore?</p>
          </div>
          <div>
              <h4 className="text-xl">Widget 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam enim pariatur quae harum expedita! Laudantium odio ipsum consequatur commodi voluptatum quae tenetur placeat, consequuntur ea officiis nobis obcaecati inventore?</p>
          </div>
          <div>
              <h4 className="text-xl">Widget 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam enim pariatur quae harum expedita! Laudantium odio ipsum consequatur commodi voluptatum quae tenetur placeat, consequuntur ea officiis nobis obcaecati inventore?</p>
          </div>
      </div>


  </div>
     
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
  