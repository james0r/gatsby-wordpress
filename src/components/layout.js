import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../scss/all.scss"
import "../scss/tachyons.min.css"

const Layout = ({ isHomePage, children }) => {
  // const {
  //   wp: {
  //     generalSettings: { title },
  //     crbThemeOptions: { crbColorPrimary }
  //   }
  // } = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     wp {
  //       generalSettings {
  //         title
  //         description
  //       }
  //       crbThemeOptions {
  //         crbColorPrimary
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <Navbar />
      </header>

      <main className="container">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
