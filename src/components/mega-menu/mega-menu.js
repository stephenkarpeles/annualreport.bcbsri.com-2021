import * as React from "react"
import "./mega-menu.css"
import BgImg from "../../images/bg-city.jpg"
// import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const MegaMenu = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"
  
  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass)
  }

  return (
    <div className="mega-menu" style={{ backgroundImage:`url(${BgImg})` }}>
      <Slide left>
        <div className="mega-menu__content">
          <div className="mega-menu__close-btn" onClick={toggleMegaMenuClass}>
            <div className="mega-menu__close-btn-x">
              <span></span>
              <span></span>
            </div>
            <div className="mega-menu__close-btn-text">
              Close
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default MegaMenu
