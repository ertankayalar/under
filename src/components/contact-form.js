import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const ContactForm = ({  title }) => (

<div className="m-3">
<h3 className="text-xl font-semibold text-gray-600">{ title }</h3>


<form className="w-full max-w-lg">

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full  px-3 mb-6 md:mb-0">
      
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100" id="isim" type="text" placeholder="Adınız, soyadınız" />
    </div>
    
  </div>



  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-300" id="telefon" type="text" placeholder="Telefon" />
      
    </div>
  </div>
  

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full  px-3 mb-6 md:mb-0">
      
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100" id="sirket" type="text" placeholder="Şirketiniz" />
    </div>
    
  </div>



  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
    <textarea className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-300"  id="message" name="message"  placeholder="Mesajınız" 
          rows="5" cols="33">

</textarea>
<p className="text-gray-600 text-xs italic">Gerçekleştirmek için heyecan duyduğunuz projenizi bizimle paylaşın.</p>

    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 text-right">
    <button class="btn"
        type="button">
Gönder
</button>

    </div></div>
</form>


</div>    


)


ContactForm.propTypes = {
    title: PropTypes.string
  }
  
ContactForm.defaultProps = {
    title: ``,
  }
  
  export default ContactForm
  


