import * as React from "react"
import "./large-number.css"

const LargeNumber = (props) => {
  return (
    <div className="large-number">
      <div className="large-number__symbol">
        {props.featNumSymbol}
      </div>
      <div className="large-number__number">
        {props.featNumNumber}        
      </div>
      <div className="large-number__value">
        {props.featNumValue}
      </div>                
      <div className="large-number__text">
        <span>{props.featNumText}</span>
      </div>
    </div>
  )
}

export default LargeNumber