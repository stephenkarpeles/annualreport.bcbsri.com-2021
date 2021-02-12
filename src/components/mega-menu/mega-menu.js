import * as React from "react"
import "./mega-menu.css"
import BgImg from "../../images/bg-city.jpg"
// import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";

const MegaMenu = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"
  const SubnavOneOpenClass = "subnav-1-is-open"
  const SubnavTwoOpenClass = "subnav-2-is-open"
  const SubnavThreeOpenClass = "subnav-3-is-open"
  
  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass)
  }

  function toggleSubnavOne() {
    document.querySelector('.mega-menu__subnav--1').classList.toggle(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--2').classList.remove(SubnavTwoOpenClass);
    document.querySelector('.mega-menu__subnav--3').classList.remove(SubnavThreeOpenClass);
  }

  function toggleSubnavTwo() {
    document.querySelector('.mega-menu__subnav--2').classList.toggle(SubnavTwoOpenClass);
    document.querySelector('.mega-menu__subnav--1').classList.remove(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--3').classList.remove(SubnavThreeOpenClass);
  }

  function toggleSubnavThree() {
    document.querySelector('.mega-menu__subnav--3').classList.toggle(SubnavThreeOpenClass);
    document.querySelector('.mega-menu__subnav--1').classList.remove(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--2').classList.remove(SubnavTwoOpenClass);
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
              <li className="mega-menu__nav-item" onClick={toggleSubnavOne}>
                <span>Health &amp;<br/>Well-being</span>
                <span>01</span> 
              </li>
              <li className="mega-menu__nav-item" onClick={toggleSubnavTwo}>
                <span>Customer<br/>Convenience</span>
                <span>02</span>                
              </li>
              <li className="mega-menu__nav-item" onClick={toggleSubnavThree}>
                <span>Financial<br/>Relief</span>
                <span>03</span>                
              </li>
            </ul>
          </nav>
          <div className="mega-menu__subnav mega-menu__subnav--1">
            <ul>
              <li><Link to="/">Temporary COVID Benefits</Link></li>
              <li><Link to="/">COVID Partnership with State</Link></li> 
              <li><Link to="/">What We Live For summit</Link></li> 
              <li><Link to="/">COVID-related Community Activities</Link></li> 
              <li><Link to="/">Blue Across RI</Link></li> 
              <li><Link to="/">RI Life Index</Link></li> 
              <li><Link to="/">Oak Street Health</Link></li> 
              <li><Link to="/">New Safe Zones</Link></li> 
              <li><Link to="/">Diversity Week: Ibram X. Kendi</Link></li> 
              <li><Link to="/">Bell Seal for Mental Health</Link></li>           
            </ul>
          </div>
          <div className="mega-menu__subnav mega-menu__subnav--2">
            <ul>
              <li><Link to="/">RI Life Index</Link></li> 
              <li><Link to="/">Oak Street Health</Link></li> 
              <li><Link to="/">New Safe Zones</Link></li> 
              <li><Link to="/">Diversity Week: Ibram X. Kendi</Link></li> 
              <li><Link to="/">Bell Seal for Mental Health</Link></li>
              <li><Link to="/">Temporary COVID Benefits</Link></li>
              <li><Link to="/">COVID Partnership with State</Link></li> 
              <li><Link to="/">What We Live For summit</Link></li> 
              <li><Link to="/">COVID-related Community Activities</Link></li> 
              <li><Link to="/">Blue Across RI</Link></li>                          
            </ul>
          </div>
          <div className="mega-menu__subnav mega-menu__subnav--3">
            <ul>
              <li><Link to="/">What We Live For summit</Link></li> 
              <li><Link to="/">COVID-related Community Activities</Link></li> 
              <li><Link to="/">Blue Across RI</Link></li> 
              <li><Link to="/">RI Life Index</Link></li> 
              <li><Link to="/">Oak Street Health</Link></li> 
              <li><Link to="/">New Safe Zones</Link></li> 
              <li><Link to="/">Diversity Week: Ibram X. Kendi</Link></li> 
              <li><Link to="/">Bell Seal for Mental Health</Link></li>
              <li><Link to="/">Temporary COVID Benefits</Link></li>
              <li><Link to="/">COVID Partnership with State</Link></li>                          
            </ul>
          </div>         
        </div>
      </Slide>
    </div>
  )
}

export default MegaMenu
