import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ActionButton from "../components/action-button"


const cta = ({ to, title, message }) => (


<div className="w-full bg-indigo-700 py-20">
  <div className="container mx-auto my-10 text-center">
    <div className="row">
    <h5 className="text-3xl text-white">{ title }</h5>

    </div>
    <div className="row py-10">
    <p className="text-center text-gray-100 mx-10 block">
      { message }
    </p>

    </div>
    <div className="row py-10">
    <ActionButton to="/iletisim/" title="Bize Ulaşın" className="bg-gray-200 text-2xl py-5 px-10 text-indigo-700 rounded hover:bg-green-400 hover:text-white"/>
    </div>
    
  </div>

</div>



)


cta.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    message: PropTypes.string
  }
  
  cta.defaultProps = {
    title: ``,
    to: ``,
    message: ``
  }
  
  export default cta
  


