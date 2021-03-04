import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import HorizontalSlider from "../components/horizontal-slider/horizontal-slider"
import VideoModal from "../components/video-modal/video-modal"
import Blockquote from "../components/blockquote/blockquote"

import HeroImg from "../images/hero-bcg-financial-relief.jpg"
import piggyBankImg from '../images/illustration-delivering-premium-relief.png'
import SmallNumber from "../components/small-number/small-number"
import LargeNumber from "../components/large-number/large-number"

const FinancialReliefPage = () => {
  return (
    <Layout>
      <Hero
        bgImg={HeroImg}
        heading={["Financial", <br/>, "Relief"]}
        subheading="BCBSRI helped providers and businesses through the pandemic not just with monetary assistance, but also with empathy and flexibility."
      />

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Delivering Premium Relief to Customers</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>In 2020, we provided multiple waves of medical and dental premium relief to our customers. Those included fully insured large group and small group customers as well as individuals who purchase insurance through BCBSRI or HealthSource RI.</p>
              
                <Slide up>
                  <div className="content-block__image">
                    <img src={piggyBankImg} alt=""/>
                  </div>
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right">
                <p>We offered the premium relief for two reasons.</p> 
                <p>First, although the use of healthcare services appears to be returning to pre-pandemic levels, we saw a significant drop through early summer as members deferred elective procedures and routine doctor visits.</p> 
                <p>Second, we recognized that many employers and members faced tremendous economic uncertainty, and premium relief was a meaningful way to help them.</p>
                
                <Slide up>
                  {/* <SmallNumber
                    smallNumNumber="245,102"
                    smallNumCaption="chilis in salsa"
                  /> */}

                  <LargeNumber
                    featNumSymbol="$"
                    featNumNumber="25"
                    featNumValue="M"
                    featNumText="In Premium Relief"
                  />
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Supporting COVID-19 relief efforts</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>To help our community through this difficult time, we donated to specific COVID-19 relief efforts—including the COVID-19 Response Fund—as well as provided financial support to many nonprofit partners that helped them reallocate funds toward COVID-19 efforts.</p>
                <p>In addition to financial support, Your Blue Van delivered supplies for the Rhode Island Coalition for the Homeless. To help protect first responders as well as our state’s most vulnerable citizens, we donated hand sanitizing products to the State of Rhode Island, City of Providence emergency responders, and nonprofit organizations like Family Service of Rhode Island.</p>
                <p>BlueAngel volunteers donated their time to deliver meals to older adults through Meals on Wheels, sew masks for healthcare and direct service professionals, and consult with local nonprofits via Zoom.</p> 

                <Slide up>
                  <LargeNumber
                    featNumSymbol="$"
                    featNumNumber="250"
                    featNumValue="K"
                    featNumText="Donated to COVID-19 relief efforts"
                  /> 
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right"> 
                <Slide up>               
                  <VideoModal/>

                  <Blockquote
                    blockquoteText="When Rhode Island PBS launches a project of interest and importance to the health and well-being of our community—whether it is prevention of opioid overdose or now COVID-19 information—we are grateful we can count on Blue Cross’s leadership and enthusiastic partnership."
                    blockquoteAuthor="David W. Piccerelli"
                    blockquoteAuthorTitle="President of WSBE Rhode Island PBS"
                  />
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>    

      <HorizontalSlider
        bgColor="#F7F9FA"
      />
      <ByTheNumbers/>
    </Layout>
  )
}

export default FinancialReliefPage