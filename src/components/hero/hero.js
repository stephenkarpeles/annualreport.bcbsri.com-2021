import React from "react"
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./hero.css"

const Hero = (props) => {
  return (
    <section className={`hero ${props.styleName}`} style={{ backgroundImage:`url(${props.bgImg})` }}>
      <div className="container">
      <Fade> 
        <div className="hero__content">
          <div className="hero__angle"></div>
          <h1>{props.heading}</h1>
          <h4>{props.subheading}</h4>
          <div className="hero__scroll-indicator">
            <span>Scroll</span>
            <svg version="1.1" id="Layer_1" x="0px" y="0px"
               viewBox="0 0 16 16">
            <path fill="#C9D7DD" id="Icon" d="M8,11c-0.2,0-0.4-0.1-0.5-0.2L2.3,6.4C1.9,6.1,1.9,5.6,2.2,5.3c0.2-0.3,0.7-0.4,1-0.1c0,0,0,0,0,0l4.7,4l4.8-4
              c0.3-0.3,0.8-0.2,1.1,0.1c0,0,0,0,0,0c0.3,0.3,0.2,0.8-0.1,1.1l-5.2,4.4C8.4,10.9,8.2,11,8,11z"/>
            </svg>
          </div>
        </div>
      </Fade>
      </div>
    </section>
  )
}

export default Hero
