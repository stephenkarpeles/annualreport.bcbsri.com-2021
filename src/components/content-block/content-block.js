import React from "react"
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./content-block.css"
import piggyBankImg from '../../images/illustration-delivering-premium-relief.png'

const ContentBlock = (props) => {
  return (
    <section className="content-block" style={{ backgroundColor: props.bgColor}}>
      <Fade>
        <div className="container container--small">
          <div className="content-block__intro">
            <div className="eyebrow">{props.eyebrow}</div>
            <h2>{props.heading}</h2>
          </div>
          <div className="content-block__col-wrap">
            <div className="content-block__col content-block__col--left">
              <p>In 2020, we provided multiple waves of medical and dental premium relief to our customers. Those included fully insured large group and small group customers as well as individuals who purchase insurance through BCBSRI or HealthSource RI.</p>
              
              <div className="content-block__image">
                <img src={piggyBankImg} alt=""/>
              </div>

              <div className="content-block__blockquote">
                <div className="content-block__blockquote-text">
                  “When Rhode Island PBS launches a project of interest and importance to the health and well-being of our community—whether it is prevention of opioid overdose or now COVID-19 information—we are grateful we can count on Blue Cross’s leadership and enthusiastic partnership.”
                </div>
                <div className="content-block__blockquote-author">
                  David W. Piccerelli
                </div>
                <div className="content-block__blockquote-author-title">
                  President of WSBE Rhode Island PBS
                </div>
              </div>             

            </div>
            <div className="content-block__col content-block__col--right">
              <p>We offered the premium relief for two reasons.</p> 
              <p>First, although the use of healthcare services appears to be returning to pre-pandemic levels, we saw a significant drop through early summer as members deferred elective procedures and routine doctor visits.</p> 
              <p>Second, we recognized that many employers and members faced tremendous economic uncertainty, and premium relief was a meaningful way to help them.</p>
              <div className="featured-number">
                <div className="featured-number__symbol">
                  {props.featNumSymbol}
                </div>
                <div className="featured-number__number">
                  {props.featNumNumber}        
                </div>
                <div className="featured-number__value">
                  {props.featNumValue}
                </div>                
                <div className="featured-number__text">
                  <span>{props.featNumText}</span>
                </div>
              </div>

              <div className="small-number">
                <div className="small-number__number">
                  {props.smallNumNumber}
                </div>
                <div className="small-number__caption">
                  {props.smallNumCaption}
                </div>
              </div>
            </div> 
          </div>     
        </div>
      </Fade>
    </section>
  )
}

export default ContentBlock
