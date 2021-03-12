import * as React from "react"
import "./number-block.css"

const NumberBlock = (props) => {
  return (
    <div className={`number-block ${props.styleName}`}>
      <div className="number-block__number">
        {props.numBlockNumber}
      </div>
      <div className="number-block__caption">
        {props.numBlockCaption}
      </div>
    </div>
  )
}

export default NumberBlock