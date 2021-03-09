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
          </div>
        </div>
      </Fade>
      </div>
    </section>
  )
}

export default Hero
