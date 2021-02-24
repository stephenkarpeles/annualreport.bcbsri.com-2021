import * as React from "react"
import "./mega-menu.css"
import BgImg from "../../images/bg-city.jpg"
// import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";

const MegaMenu = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"
  const SubnavOneOpenClass = "subnav-1-is-open"
  const SubnavOneBodyClass = "body-subnav-1-is-open"
  const SubnavTwoOpenClass = "subnav-2-is-open"
  const SubnavTwoBodyClass = "body-subnav-2-is-open"
  const SubnavThreeOpenClass = "subnav-3-is-open"
  const SubnavThreeBodyClass = "body-subnav-3-is-open"
  
  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass);
    document.body.classList.remove(SubnavOneBodyClass);
    document.body.classList.remove(SubnavTwoBodyClass);
    document.body.classList.remove(SubnavThreeBodyClass);
    document.querySelector('.mega-menu__subnav--1').classList.remove(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--2').classList.remove(SubnavTwoOpenClass);
    document.querySelector('.mega-menu__subnav--3').classList.remove(SubnavThreeOpenClass);
  }

  function toggleSubnavOne() {
    document.querySelector('.mega-menu__subnav--1').classList.toggle(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--2').classList.remove(SubnavTwoOpenClass);
    document.querySelector('.mega-menu__subnav--3').classList.remove(SubnavThreeOpenClass);
    document.body.classList.toggle(SubnavOneBodyClass);
    document.body.classList.remove(SubnavTwoBodyClass);
    document.body.classList.remove(SubnavThreeBodyClass);
  }

  function toggleSubnavTwo() {
    document.querySelector('.mega-menu__subnav--2').classList.toggle(SubnavTwoOpenClass);
    document.querySelector('.mega-menu__subnav--1').classList.remove(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--3').classList.remove(SubnavThreeOpenClass);
    document.body.classList.toggle(SubnavTwoBodyClass);
    document.body.classList.remove(SubnavOneBodyClass);
    document.body.classList.remove(SubnavThreeBodyClass);
    
  }

  function toggleSubnavThree() {
    document.querySelector('.mega-menu__subnav--3').classList.toggle(SubnavThreeOpenClass);
    document.querySelector('.mega-menu__subnav--1').classList.remove(SubnavOneOpenClass);
    document.querySelector('.mega-menu__subnav--2').classList.remove(SubnavTwoOpenClass);
    document.body.classList.toggle(SubnavThreeBodyClass);
    document.body.classList.remove(SubnavOneBodyClass);
    document.body.classList.remove(SubnavTwoBodyClass);
  }

  return (
    <div className="mega-menu">
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
          <div className="mega-menu__title">
            <span>2020 Annual and Community Report</span>
          </div>
          <nav className="mega-menu__nav">
            <ul>
              <li className="mega-menu__nav-item mega-menu__nav-item--1" onClick={toggleSubnavOne} onKeyDown={toggleSubnavOne}>
                <span>Health &amp;<br/>Well-being</span>
                <span>01</span> 
              </li>
              <li className="mega-menu__nav-item mega-menu__nav-item--2" onClick={toggleSubnavTwo} onKeyDown={toggleSubnavTwo}>
                <span>Customer<br/>Convenience</span>
                <span>02</span>                
              </li>
              <li className="mega-menu__nav-item mega-menu__nav-item--3" onClick={toggleSubnavThree} onKeyDown={toggleSubnavThree}>
                <span>Financial<br/>Relief</span>
                <span>03</span>                
              </li>
            </ul>
          </nav>
          <div className="mega-menu__subnav mega-menu__subnav--1">
            <ul>
              <li><Link to="/">Expanding coverage during COVID-19—at no cost</Link></li>
              <li><Link to="/">Volunteering with a focus on community and safety</Link></li>
              <li><Link to="/">Using data and philanthropy to address housing</Link></li>
              <li><Link to="/">Keeping kids playing during a pandemic</Link></li>
              <li><Link to="/">Bringing Oak Street Health to more members</Link></li>
              <li><Link to="/">Achieving our vision through Diversity, Equity &amp; Inclusion</Link></li>      
            </ul>
          </div>
          <div className="mega-menu__subnav mega-menu__subnav--2">
            <ul>
              <li><Link to="/">Accelerating the use of telehealth</Link></li> 
              <li><Link to="/">Bringing Your Blue Store into homes</Link></li> 
              <li><Link to="/">Making healthcare easier for Medicare members</Link></li> 
              <li><Link to="/">Delivering free groceries to high-risk Medicare members</Link></li> 
              <li><Link to="/">Giving members more control</Link></li>                          
            </ul>
          </div>
          <div className="mega-menu__subnav mega-menu__subnav--3">
            <ul>
              <li><Link to="/">Delivering premium relief to customers</Link></li> 
              <li><Link to="/">Supporting COVID-19 relief efforts</Link></li> 
              <li><Link to="/">Offering grants to behavioral health practices</Link></li> 
              <li><Link to="/">Helping small businesses during the pandemic</Link></li> 
              <li><Link to="/">Navigating the CARES Act</Link></li> 
              <li><Link to="/">Supporting providers with the rapid adoption of telehealth, advance payments</Link></li>                         
            </ul>
          </div>         
        </div>
      </Slide>
    </div>
  )
}

export default MegaMenu
