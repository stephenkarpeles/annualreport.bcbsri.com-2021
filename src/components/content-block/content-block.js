import React from "react"
// import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import "./content-block.css"
import piggyBankImg from '../../images/illustration-delivering-premium-relief.png'

const ContentBlock = (props) => {
  return (
    <section className="content-block">
      <Slide bottom>
        <div className="container container--small">
          <div className="content-block__intro">
            <div className="eyebrow">Financial Relief</div>
            <h2>Delivering premium relief to customers</h2>
          </div>
          <div className="content-block__col-wrap">
            <div className="content-block__col content-block__col--left">
              <p>In 2020, we provided multiple waves of medical and dental premium relief to our customers. Those included fully insured large group and small group customers as well as individuals who purchase insurance through BCBSRI or HealthSource RI.</p>
              
              <div className="mar-top-2">
                <img src={piggyBankImg} alt=""/>
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
            </div> 
          </div>     
        </div>
      </Slide>
    </section>
  )
}

export default ContentBlock
