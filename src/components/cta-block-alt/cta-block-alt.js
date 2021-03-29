import * as React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

import iconArrowRightDarkBlue from '../../images/icons/icon-arrow-circle-right-thicker-dark-blue.svg'

import "./cta-block-alt.css"

const CtaBlockAlt = (props) => {
  return (
    <>
      <div className="cta-block-alt-intro">
        <div className="container">
          <h4>See how we helped our customers and our community</h4>
        </div>
      </div>
      <div className={`cta-block-alt ${props.styleName}`}>
        <Link to="/" className="cta-block-alt__item cta-block-alt__item--homepage">
          <Fade>
            <h3>Return to<br/>Homepage</h3>
            <Link to="/" className="cta-block-alt__link">Learn More <img src={iconArrowRightDarkBlue} alt=""/></Link>
          </Fade>
        </Link>
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
    </>
  )
}

export default CtaBlockAlt