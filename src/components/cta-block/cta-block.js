import * as React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

import "./cta-block.css"

const CtaBlock = () => {
  return (
    <div className="cta-block">
      <Link to="/health-well-being" className="cta-block__item cta-block__item--health-well-being">
        <Fade>
          <h3>Health &amp;<br/>Well-Being</h3>
        </Fade>
      </Link>
      <Link to="/customer-convenience" className="cta-block__item cta-block__item--customer-convenience">
        <Fade>
          <h3>Customer<br/>Convenience</h3>
        </Fade>  
      </Link>    
      <Link to="/financial-relief" className="cta-block__item cta-block__item--financial-relief">
        <Fade>
          <h3>Financial<br/>Relief</h3>
        </Fade>
      </Link>
    </div>
  )
}

export default CtaBlock