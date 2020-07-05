/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import PageHeader from "./page-header"

const PageLayout = ({ children, pageTitle, pageDescription }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageHeader title={ pageTitle } description={ pageDescription } />
        <main className="container mx-auto py-10 px-5">{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
   
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
}

export default PageLayout
