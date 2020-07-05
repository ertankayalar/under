import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const PageHeader = ({ title, description }) => (
    <div className="w-full bg-gray-300 text-gray-700">
        <div className="container mx-auto py-10 px-5">
            <h1 className="text-6xl font-semibold">{ title }</h1>
            <p className="text-sm">
                { description }
            </p>

        </div>

    </div>

)



PageHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }
  
  
  PageHeader.defaultProps = {
    title: ``,
    description: ``,
  }
  
  export default PageHeader
  


