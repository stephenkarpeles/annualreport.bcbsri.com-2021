import * as React from "react"
import "./mega-menu.css"
import BgImg from "../../images/bg-city.jpg"

// markup
const MegaMenu = () => {
  return (
    <div className="mega-menu" style={{ backgroundImage:`url(${BgImg})` }}>
      <div className="mega-menu__content">
        Testing
      </div>
    </div>
  )
}

export default MegaMenu
