import React from "react"
import "./layout.css"
import { Helmet } from "react-helmet";
import Header from "../header/header"
import Footer from "../footer/footer"
import MegaMenu from "../mega-menu/mega-menu"

const Layout = props => {
  return (
    <div>
      <Helmet>
        <link href="//cloud.typenetwork.com/projects/5316/fontface.css/" rel="stylesheet" type="text/css"/>
      </Helmet>
      <Header />
      <MegaMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
