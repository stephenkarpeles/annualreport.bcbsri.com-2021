import * as React from "react"
import "./mega-menu.css"
import BgImg from "../../images/bg-city.jpg"
import Fade from 'react-reveal/Fade';

const MegaMenu = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"
  
  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass)
  }

  return (
    <Fade>
      <div className="mega-menu" style={{ backgroundImage:`url(${BgImg})` }}>
        <div className="mega-menu__content">
          <button onClick={toggleMegaMenuClass}>
            CLOSE
          </button>
        </div>
      </div>
    </Fade>
  )
}

export default MegaMenu
