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
          <div className="mega-menu__close-btn" role="button" tabIndex={0} onClick={toggleMegaMenuClass} onKeyDown={toggleMegaMenuClass} >
            <div className="mega-menu__close-btn-x">
              <span></span>
              <span></span>
            </div>
            <div className="mega-menu__close-btn-text">
              Close
            </div>
          </div>
          <nav className="mega-menu__nav">
            <ul>
              <li className="mega-menu__nav-item">
                <span>Health &amp;<br/>Well-being</span>
                <span>01</span>                
              </li>
              <li className="mega-menu__nav-item">
                <span>Customer<br/>Convenience</span>
                <span>02</span>                
              </li>
              <li className="mega-menu__nav-item">
                <span>Financial<br/>Relief</span>
                <span>03</span>                
              </li>
            </ul>
          </nav>
        </div>
      </Slide>
    </div>
  )
}

export default MegaMenu
