import * as React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"
import iconArrowRightWhite from '../../images/icons/icon-arrow-circle-right-thicker-white.svg'

import "./cta-block.css"

const CtaBlock = () => {
  return (
    <>
      <div className="cta-block-intro">
        <div className="container">
          <h4>See how we helped our customers and our community </h4>
        </div>
      </div>
      <div className="cta-block">
        <Link to="/health-well-being" className="cta-block__item cta-block__item--health-well-being">
          <Fade>
            <div className="cta-block__item-content">
              <h3>Health &amp;<br/>Well-Being</h3>
              <Link to="/health-well-being" className="cta-block__link">Learn More <img src={iconArrowRightWhite} alt=""/></Link>
            </div>
          </Fade>
        </Link>
        <Link to="/customer-convenience" className="cta-block__item cta-block__item--customer-convenience">
          <Fade>
            <div className="cta-block__item-content">
              <h3>Customer<br/>Convenience</h3>
              <Link to="/customer-convenience" className="cta-block__link">Learn More <img src={iconArrowRightWhite} alt=""/></Link>
            </div>
          </Fade>  
        </Link>    
        <Link to="/financial-relief" className="cta-block__item cta-block__item--financial-relief">
          <Fade>
            <div className="cta-block__item-content">
              <h3>Financial<br/>Relief</h3>
              <Link to="/financial-relief" className="cta-block__link">Learn More <img src={iconArrowRightWhite} alt=""/></Link>
            </div>
          </Fade>
        </Link>
      </div>
    </>
  )
}

export default CtaBlock