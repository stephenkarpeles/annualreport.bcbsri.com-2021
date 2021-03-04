import * as React from "react"
import "./blockquote.css"

const Blockquote = (props) => {
  return (
    <div className="blockquote">
      <div className="blockquote__text">
        “{props.blockquoteText}”
      </div>
      <div className="blockquote__author">
        {props.blockquoteAuthor}
      </div>
      <div className="blockquote__author-title">
        {props.blockquoteAuthorTitle}
      </div>
    </div>  
  )
}

export default Blockquote