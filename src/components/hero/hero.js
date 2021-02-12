import * as React from "react"
import "./hero.css"
import HeroImage from "../../images/hero-placeholder.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImage} alt="Hero"/>
    </div>
  )
}

export default Hero
