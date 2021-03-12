
import * as React from "react"
import Fade from 'react-reveal/Fade'
// import Slide from 'react-reveal/Slide'

import "./cta-block.css"

const CtaBlock = (props) => {
  return (
    <div className="cta-block">
      <div className="cta-block__item cta-block__item--health-well-being">
        <h3>Health &amp;<br/>Well-Being</h3>
      </div>
      <div className="cta-block__item cta-block__item--customer-convenience">
        <h3>Customer<br/>Convenience</h3>
      </div>
      <div className="cta-block__item cta-block__item--financial-relief">
        <h3>Financial<br/>Relief</h3>
      </div>
    </div>
  )
}

export default CtaBlock