import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const FooterWidgets = ({ siteTitle }) => (

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


  
  )
  
  Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Footer.defaultProps = {
    siteTitle: ``,
  }
  
  export default FooterWidgets
  