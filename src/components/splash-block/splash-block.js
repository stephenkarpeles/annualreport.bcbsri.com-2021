
import * as React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import "./splash-block.css"
import heroImg1 from "../../images/hero-image-1.jpg"
import heroImg2 from "../../images/hero-image-2.jpg"
import heroImg3 from "../../images/hero-image-3.jpg"
import heroImg4 from "../../images/hero-image-4.jpg"

const SplashBlock = () => {
  return (
    <div className="splash-block">
      <div className="container container--small">
        <div className="splash-block__title">
          <Fade>
            <h1>
              <span>2020</span><br/>
              Annual and<br/>Community Report
            </h1>
          </Fade>
        </div>
      </div>
      <Slide bottom cascade>
        <div className="splash-block__image-row">        
          <div className="splash-block__image">
            <img src={heroImg1} alt=""/>
          </div>
          <div className="splash-block__image">
            <img src={heroImg2} alt=""/>
          </div>
          <div className="splash-block__image">
            <img src={heroImg3} alt=""/>
          </div>
          <div className="splash-block__image">
            <img src={heroImg4} alt=""/>
          </div>
        </div>
      </Slide>      
    </div>
  )
}

export default SplashBlock