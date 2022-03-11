/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../css/theme"
import { css, Global } from "@emotion/core"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"
import AOS from "aos"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Global
        styles={css`
          div {
            color: ${theme.colors.text};
          }
          a {
            text-decoration: none;
          }
          h1,
          h2,
          h3,
          p,
          a,
          div,
          label,
          input {
            font-family: ${theme.fonts.body};
          }
          h1 {
            font-weight: ${theme.fontWeights.heading};
            font-size: ${theme.fontSizes[1]}px;
            color: ${theme.colors.dark};
          }
          h3 {
            font-size: ${theme.fontSizes[3]}px;
            color: ${theme.colors.dark};
          }
          h4 {
            font-size: ${theme.fontSizes[2]}px;
            color: ${theme.colors.dark};
          }
          p,
          li,
          a {
            font-size: ${theme.fontSizes[0]}px;
            color: ${theme.colors.text};
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
