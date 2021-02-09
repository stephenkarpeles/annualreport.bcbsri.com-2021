import React from "react"
import "./layout.css"
import Header from "../header/header"
import Footer from "../footer/footer"
import MegaMenu from "../mega-menu/mega-menu"

const Layout = props => {
  return (
    <div>
      <Header />
      <MegaMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
