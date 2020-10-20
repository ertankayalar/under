import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../components/menu"

const Header = ({ siteTitle }) => {
  const burgerClick = e => {
    const menu = document.querySelector("#menu")

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden")
    } else {
      menu.classList.add("hidden")
    }
  }
  return (
    <header className="w-full  bg-gray-100 ">
      <nav className="container mx-auto grid md:grid-cols-3">
        <div className="md:col-span-1 flex justify-between items-center md:justify-start py-5">
          <span className="text-3xl text-gray-700">
            <Link to="/"> {siteTitle} </Link>
          </span>

          <div
            className="px-4 cursor-pointer md:hidden"
            id="burger"
            onClick={burgerClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </div>

        <Menu />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
