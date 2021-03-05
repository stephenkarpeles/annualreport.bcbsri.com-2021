import * as React from "react"
import "./small-number.css"

const SmallNumber = (props) => {
  return (
    <div className={`small-number ${props.styleName}`}>
      <div className="small-number__number">
        {props.smallNumNumber}
      </div>
      <div className="small-number__caption">
        {props.smallNumCaption}
      </div>
    </div>
  )
}

export default SmallNumber