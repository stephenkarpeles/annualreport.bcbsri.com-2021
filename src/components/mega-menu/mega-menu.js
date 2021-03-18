import * as React from "react"
import "./mega-menu.css"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from "gatsby";
import iconCustomerConvenienceWhite from '../../images/icons/icon-nav-customer-convenience_white.png'
import iconFinancialReliefWhite from '../../images/icons/icon-nav-financial-relief.png'
import iconHealthWellbeingWhite from '../../images/icons/icon-nav-health-well-being_white.png'
import iconCustomerConvenience from '../../images/icons/icon-nav-customer-convenience-orange.png'
import iconFinancialRelief from '../../images/icons/icon-nav-financial-relief-green.png'
import iconHealthWellbeing from '../../images/icons/icon-nav-health-well-being.png'

const MegaMenu = () => {
  // TODO - refactor this setup, to be more DRY
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

  function hideMegaMenu() {
    document.body.classList.remove(MegaMenuOpenClass);
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
            <Link to="/" onClick={hideMegaMenu} onKeyDown={hideMegaMenu}>
              <span>2020 Annual and Community Report</span>
            </Link>
          </div>
          <nav className="mega-menu__nav">
            <ul>
              <li className="mega-menu__nav-item mega-menu__nav-item--1" onClick={toggleSubnavOne} onKeyDown={toggleSubnavOne}>
                <div className="mega-menu__nav-item-title">
                  <span>Health &amp;<br/>Well-being</span>
                  <span>
                    <img src={iconHealthWellbeingWhite} alt="Icon"/>
                    <img src={iconHealthWellbeing} alt="Icon"/>
                  </span>
                </div>
                <Fade>
                  <ul className="mega-menu__subnav mega-menu__subnav--1">
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being">Creativity, speed, and collaboration</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#expanding-coverage">Expanding coverage during COVID-19—at no cost</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#volunteering">Volunteering with a focus on community and safety</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#improving-access">Improving access to healthy and affordable housing</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#keeping-kids-playing">Keeping kids playing during a pandemic</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#bringing-oak-street-health">Bringing Oak Street Health to more members</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/health-well-being#achieving-our-vision">Achieving our vision through Diversity, Equity &amp; Inclusion</Link></li>
                  </ul>
                </Fade>
              </li>
              <li className="mega-menu__nav-item mega-menu__nav-item--2" onClick={toggleSubnavTwo} onKeyDown={toggleSubnavTwo}>
                <div className="mega-menu__nav-item-title">
                  <span>Customer<br/>Convenience</span>
                  <span>
                    <img src={iconCustomerConvenienceWhite} alt=""/>
                    <img src={iconCustomerConvenience} alt=""/>
                  </span>
                </div>
                <Fade>
                  <ul className="mega-menu__subnav mega-menu__subnav--2">
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience">Virtual tools and innovative benefits</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience#accelerating-telehealth">Accelerating the use of telehealth</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience#bringing-your-blue-store">Bringing Your Blue Store into homes</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience#making-healthcare-easier">Making healthcare easier for Medicare members</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience#delivering-free-groceries">Delivering free groceries to high-risk Medicare members</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/customer-convenience#giving-members-control">Giving members more control</Link></li>
                  </ul>
                </Fade>
              </li>
              <li className="mega-menu__nav-item mega-menu__nav-item--3" onClick={toggleSubnavThree} onKeyDown={toggleSubnavThree}>
                <div className="mega-menu__nav-item-title">
                  <span>Financial<br/>Relief</span>
                  <span>
                    <img src={iconFinancialReliefWhite} alt=""/>
                    <img src={iconFinancialRelief} alt=""/>
                  </span>
                </div>
                <Fade>
                  <ul className="mega-menu__subnav mega-menu__subnav--3">
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief">Assistance, empathy, and flexibility</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#delivering-premium-relief">Delivering premium relief to customers</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#supporting-covid19-relief">Supporting COVID-19 relief efforts</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#offering-grants">Offering grants to behavioral health practices</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#helping-small-businesses">Helping small businesses during the pandemic</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#navigating-cares-act">Navigating the CARES Act</Link></li>
                    <li><Link onClick={hideMegaMenu} onKeyDown={hideMegaMenu} to="/financial-relief#supporting-providers">Supporting providers with the rapid adoption of telehealth, advance payments</Link></li>
                  </ul>
                </Fade>
              </li>
            </ul>
          </nav>
        </div>
      </Slide>
    </div>
  )
}

export default MegaMenu
