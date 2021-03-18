import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import HorizontalSlider from "../components/horizontal-slider/horizontal-slider"
import VideoModal from "../components/video-modal/video-modal"
import Blockquote from "../components/blockquote/blockquote"
import LargeNumber from "../components/large-number/large-number"
import FullWidthImage from "../components/full-width-image/full-width-image"

//Images
import HeroImg from "../images/hero-bcg-financial-relief-fullsize.jpg"
import websiteImg from '../images/covid19-website.jpg'
import videoKidsImage from '../images/video-kids-want-to-know.jpg'

const FinancialReliefPage = () => {
  return (
    <Layout>
      <Hero
        styleName="hero--financial-relief"
        bgImg={HeroImg}
        heading={["Financial", <br/>, "Relief"]}
        subheading="BCBSRI helped providers and businesses through the pandemic not just with monetary assistance, but also with empathy and flexibility."
      />

      <section id="delivering-premium-relief" className="content-block" style={{ backgroundColor: "#fff"}}>
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
                    <StaticImage src="../images/illustration-delivering-premium-relief.png" alt=""/>
                  </div>
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right">
                <p>We offered the premium relief for two reasons.</p> 
                <p>First, although the use of healthcare services appears to be returning to pre-pandemic levels, we saw a significant drop through early summer as members deferred elective procedures and routine doctor visits.</p> 
                <p>Second, we recognized that many employers and members faced tremendous economic uncertainty, and premium relief was a meaningful way to help them.</p>
                
                <Slide up>
                  <LargeNumber
                    styleName="large-number--has-tilde"
                    featNumSymbol="~"
                    featNumNumber={[<><sup>$</sup>30</>]}
                    featNumValue="M"
                    featNumText="In Premium Relief"
                  />
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section id="supporting-covid19-relief" className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Supporting COVID-19 relief efforts</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>To help our community through this difficult time, we donated to specific COVID-19 relief efforts—including the COVID-19 Response Fund—as well as provided financial support to many nonprofit partners that helped them reallocate funds toward COVID-19 efforts.</p>
                <p>In addition to financial support, Your Blue Van delivered supplies for the Rhode Island Coalition for the Homeless. To help protect first responders and our state’s most vulnerable citizens, we donated hand sanitizing products to the State of Rhode Island, City of Providence emergency responders, and nonprofit organizations like Family Service of Rhode Island.</p>
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
                  <VideoModal
                    caption={[<><u>Watch a clip</u> of the Rhode Island PBS short film series, <em>Kids Want to Know</em>, sponsored by BCBSRI.</>]}
                    posterImage={videoKidsImage}
                    videoSource="//www.youtube.com/embed/lFa201sGqm4"
                  />

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

      <section style={{ backgroundColor: "#F7F9FA"}}>
        <Fade>
          <HorizontalSlider/>
        </Fade>
      </section>

      <section id="offering-grants" className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Offering grants to behavioral health practices</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>Behavioral Health Quality Grants from BCBSRI will help behavioral health practices better anticipate patient needs and close gaps in care. The $1,118,309 in grants, provided over the course of the next two years, will help these practices launch new electronic health record programs and add population data analysts:</p>
              
                <Fade>
                  <div className="content-block__list">
                    <ul>
                      <li>Newport County Community Mental Health Center</li>
                      <li>Providence Behavioral Health Associates, Inc.</li>
                      <li>Lisa M. Rocchio, Ph.D. &amp; Associates, Inc.</li>
                      <li>Barrington Behavioral Health Services, LLC,</li>
                    </ul>
                  </div>

                  <Blockquote
                    blockquoteText="These grants can help transform smaller practices where thousands of Rhode Islanders receive vital services each year."
                    blockquoteAuthor="Sarah Fleury"
                    blockquoteAuthorTitle="LICSW, CPHQ, BCBSRI manager of behavioral health"
                  />
                </Fade>         

              </div>
              <div className="content-block__col content-block__col--right">              
                
                <Slide up>
                  <div>
                    <StaticImage src="../images/offering-grants-to-behavioral-health-practices.jpg" alt="Financial Relief"/>
                  </div>
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section id="helping-small-businesses" className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Helping small businesses during the pandemic</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">

                <Slide left>
                  <div className="content-block__overflow-image">
                    <StaticImage src="../images/financial-relief-small-businesses.png" alt="Financial Relief"/>
                  </div>
                </Slide>

              </div>
              <div className="content-block__col content-block__col--right"> 
                <p>When the calls started coming in, we knew we had to help. Small businesses were hit especially hard during the pandemic. Many were faced with cash flow constraints. A BCBSRI team of two people worked with more than 150 businesses, setting up payment plans, extending payment terms, and helping connect them with available resources for their businesses.</p>
                <p>With that assistance, businesses could tell their employees that they would not lose their health coverage in the middle of a pandemic.</p>
              
                <Fade>
                  <Blockquote
                    blockquoteText="This is very helpful to us during this difficult time. We appreciate your partnership."
                    blockquoteAuthor=""
                    blockquoteAuthorTitle=""
                  />
                </Fade> 
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section id="navigating-cares-act" className="content-block content-block--light-text" style={{ backgroundColor: "#003E51"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-22">Financial Relief</div>
              <h2>Navigating the CARES Act</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">

                <p>When Congress passed the CARES Act in March 2020, the promise of financial assistance buoyed many businesses in Rhode Island. But navigating all the pieces of the act, as well as other federal and state assistance, could be rocky, especially for small businesses with few extra resources. So BCBSRI compiled a simple guide to the many programs and made it easily accessible on our <a target="_blank" rel="noreferrer" href="https://www.bcbsri.com/keepinformed/">Keeping You Well and Well-informed site</a>.</p>

              </div>
              <div className="content-block__col content-block__col--right"> 
                <p>Then we went further, using the guide to help our customers understand how they could apply for loans and grants. That assistance helped many small businesses stay afloat during the lowest economic times of the pandemic in 2020.</p>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

        <Link target="_blank" rel="noreferrer" to="https://www.bcbsri.com/keepinformed/">
          <FullWidthImage
            bgImg={websiteImg}
            altText="Financial Relief"
          />
        </Link>

      <section id="supporting-providers" className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow">Financial Relief</div>
              <h2>Supporting providers with the rapid adoption of telehealth</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>As providers saw an increasing number of their patients virtually, BCBSRI led the way by expanding access to telehealth and reducing the cost for patients ahead of state requirements. This gave providers a head start in transferring their practices to a virtual environment before COVID restrictions were enacted.</p>

                <Slide up>
                  <LargeNumber
                    styleName="large-number--shrunk"
                    featNumSymbol="$"
                    featNumNumber="69.6"
                    featNumValue="M"
                    featNumText="Paid to providers for telehealth services"
                  /> 
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right">
                <p>We also provided weekly assistance to practices on how to apply for federal loans through the Paycheck Protection Program.</p> 
                <Fade>               
                  <div className="content-block__overflow-image">
                    <StaticImage src="../images/supporting-providers.png" alt="Financial Relief"/>
                  </div>
                </Fade>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <ByTheNumbers/>
    </Layout>
  )
}

export default FinancialReliefPage