import React from "react"
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import Accordion from '../accordion/accordion'
import "./by-the-numbers.css"

const ByTheNumbers = () => {
  return (
    <section className="by-the-numbers">
      <div className="container container--x-small">
        <div className="by-the-numbers__intro">
          <h2>By The Numbers</h2>
          <p>A decrease in office visits and procedures during the pandemic was offset by premium relief and planning for a rebound in the amount of healthcare that our members will require in the coming year.</p>
        </div>

        <Accordion/>

        <div className="by-the-numbers__footnote">
          <p>This formulation represents unaudited results utilizing Statutory Accounting Principles. The Blue Cross and Blue Shield Association licenses Blue Cross & Blue Shield of Rhode Island to offer certain products and services under the Blue Cross and Blue Shield brand names. Blue Cross & Blue Shield of Rhode Island is an independent organization governed by its own Board of Directors and solely responsible for its own debts and other obligations. Neither the Association nor any other organization using the Blue Cross and Blue Shield brand names acts as a guarantor of Blue Cross & Blue Shield of Rhode Island’s obligations. A copy of Blue Cross & Blue Shield of Rhode Island’s most recent audited financial statements is available on request to: Blue Cross & Blue Shield of Rhode Island, 500 Exchange Street, Providence, RI 02903.</p>
        </div>
      </div>
    </section>
  )
}

export default ByTheNumbers
