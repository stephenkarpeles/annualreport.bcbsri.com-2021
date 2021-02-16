import * as React from "react"
import Fade from 'react-reveal/Fade';
import "./hero.css"
import HeroImage from "../../images/hero-placeholder.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <Fade>  
        <img src={HeroImage} alt="Hero"/>
      </Fade>
    </div>
  )
}

export default Hero
