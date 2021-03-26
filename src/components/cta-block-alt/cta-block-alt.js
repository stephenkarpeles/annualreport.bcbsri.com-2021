import * as React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

import iconArrowRightDarkBlue from '../../images/icons/icon-arrow-circle-right-thicker-dark-blue.svg'

import "./cta-block-alt.css"

const CtaBlockAlt = () => {
  return (
    <div className="cta-block-alt">
      <Link to="/health-well-being" className="cta-block-alt__item cta-block-alt__item--health-well-being">
        <Fade>
          <h3>Health &amp;<br/>Well-Being</h3>
          <Link to="/health-well-being" className="cta-block-alt__link">Learn More <img src={iconArrowRightDarkBlue} alt=""/></Link>
        </Fade>
      </Link>
      <Link to="/customer-convenience" className="cta-block-alt__item cta-block-alt__item--customer-convenience">
        <Fade>
          <h3>Customer<br/>Convenience</h3>
          <Link to="/customer-convenience" className="cta-block-alt__link">Learn More <img src={iconArrowRightDarkBlue} alt=""/></Link>
        </Fade>  
      </Link>    
      <Link to="/financial-relief" className="cta-block-alt__item cta-block-alt__item--financial-relief">
        <Fade>
          <h3>Financial<br/>Relief</h3>
          <Link to="/financial-relief" className="cta-block-alt__link">Learn More <img src={iconArrowRightDarkBlue} alt=""/></Link>
        </Fade>
      </Link>
    </div>
  )
}

export default CtaBlockAlt