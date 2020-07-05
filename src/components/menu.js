import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ menuClassName, itemClassName }) => (
<div className={ menuClassName }>

<Link className={ itemClassName } to="/">GİRİŞ</Link>
<Link className={ itemClassName } to="/hakkimizda/">HAKKIMIZDA</Link>
<Link className={ itemClassName } to="/hizmetler/">HİZMETLER</Link>
<Link className={ itemClassName } to="/iletisim/">İLETİŞİM</Link>

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
