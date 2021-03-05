import * as React from "react"
import "./full-width-image.css"

const FullWidthImage = (props) => {
  return (
    <div className="full-width-image" style={{ backgroundImage:`url(${props.bgImg})` }}>
    </div>
  )
}

export default FullWidthImage