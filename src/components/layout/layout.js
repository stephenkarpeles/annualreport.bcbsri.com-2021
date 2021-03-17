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
        <link rel="preload" as="image" href="/static/nav-bcg-customer-convenience-ace152e7286337049ba218febd96f9e8.jpg"/>
        <link rel="preload" as="image" href="/static/hero-bcg-health-wellbeing-new-d7e8e1db46bde7f9440304a3dbd1da2d.jpg"/>
        <link rel="preload" as="image" href="/static/nav-bcg-financial-relief-6961e8e08ea7074f22a87e92ba17e868.jpg"/>
      </Helmet>
      <Header />
      <MegaMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
