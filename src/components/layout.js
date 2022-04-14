import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import parse from "html-react-parser"
import "../scss/all.scss"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
      crbThemeOptions: { crbColorPrimary }
    }
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        crbThemeOptions {
          crbColorPrimary
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout