import React from "react"
import "../base.css"
import "./layout.css"
import { Helmet } from "react-helmet";
import Header from "../header/header"
import Footer from "../footer/footer"
import MegaMenu from "../mega-menu/mega-menu"

const Layout = props => {
  return (
    <div id="App">
      <Helmet>
        <link href="//cloud.typenetwork.com/projects/5316/fontface.css/" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="//use.typekit.net/mpp0kpf.css"/>
      </Helmet>
      <Header />
      <MegaMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
