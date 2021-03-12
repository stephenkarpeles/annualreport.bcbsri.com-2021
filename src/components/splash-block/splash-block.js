
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
      <div className="container container--small">
        <Fade>
          <div className="splash-block__intro-text">
            <p>2020. In a year of pandemic and social turmoil, Rhode Islanders pulled together to care for and support each other. Their actions inspired all of us at Blue Cross &amp; Blue Shield of Rhode Island (BCBSRI) to play a lead role in helping businesses, members, healthcare providers, and other not-for-profit organizations navigate unprecedented times. We know that the many positive changes we saw last year will carry forward through the future.</p>
          </div> 
        </Fade> 
      </div>     
    </div>
  )
}

export default SplashBlock