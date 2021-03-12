
import * as React from "react"
import Fade from 'react-reveal/Fade'
// import Slide from 'react-reveal/Slide'

import "./cta-block.css"

const CtaBlock = () => {
  return (
    <div className="cta-block">
      <div className="cta-block__item cta-block__item--health-well-being">
        <Fade>
          <h3>Health &amp;<br/>Well-Being</h3>
        </Fade>
      </div>
      <div className="cta-block__item cta-block__item--customer-convenience">
        <Fade>
          <h3>Customer<br/>Convenience</h3>
        </Fade>
      </div>
      <div className="cta-block__item cta-block__item--financial-relief">
        <Fade>
          <h3>Financial<br/>Relief</h3>
        </Fade>
      </div>
    </div>
  )
}

export default CtaBlock