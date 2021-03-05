import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

// Components
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import HorizontalSlider from "../components/horizontal-slider/horizontal-slider"
import VideoModal from "../components/video-modal/video-modal"
import Blockquote from "../components/blockquote/blockquote"
import SmallNumber from "../components/small-number/small-number"
import LargeNumber from "../components/large-number/large-number"
import FullWidthImage from "../components/full-width-image/full-width-image"

//Images
import HeroImg from "../images/hero-bcg-customer-convenience.jpg"
import piggyBankImg from '../images/illustration-delivering-premium-relief.png'
import grantsImg from '../images/offering-grants-to-behavioral-health-practices.jpg'
import reliefImg from '../images/financial-relief-small-businesses.png'
import supportImg from '../images/supporting-providers.png'
import websiteImg from '../images/covid19-website.jpg'



const CustomerConveniencePage = () => {
  return (
    <Layout>
      <Hero
        styleName="hero--orange-accent"
        bgImg={HeroImg}
        heading={["Customer", <br/>, "Convenience"]}
        subheading="New virtual tools and innovative benefits helped Rhode Islanders gain more control over their own health and well-being."
      />

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Accelerating the use of telehealth</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>Before the pandemic, we saw a steady rise in the number of members taking advantage of telehealth, which allowed them to get medical care via video or phone. But during the pandemic—especially in the spring when doctors’ offices were closed—telehealth helped our members get care at a safe social distance.</p>                        

              </div>
              <div className="content-block__col content-block__col--right">
                <Fade>
                  <SmallNumber 
                    styleName="small-number--orange"
                    smallNumNumber="723,106"
                    smallNumCaption="visits in 2020"
                  />
                </Fade>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Bringing Your Blue Store into homes</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>At our store locations, one of the most popular perks was free fitness classes. We offered dozens each week, and members often came early to socialize before the class.</p>
                <p>Since we stopped offering in-person fitness classes due to the pandemic, we wanted to give our members another way to stay fit and connect with each other. Our solution was to offer fitness classes live on Facebook. They were so well received that we soon produced a different class every weekday and even introduced live workshops on healthy living. Since these classes are available on Facebook, they can help all Rhode Islanders (and people living anywhere) to be healthier.</p>
                <p>To help our BCBSRI Medicare Advantage members take advantage of their health and wellness benefits during the pandemic, we mailed them information about the Facebook classes as well as a no-cost fitness kit that included resistance bands, a water bottle, and a towel.</p> 

                <Slide up>
                  <LargeNumber
                    styleName="large-number--orange"
                    featNumSymbol=""
                    featNumNumber="57"
                    featNumValue="K+"
                    featNumText="BCBSRI Medicare Advantage members received a home fitness kit"
                  /> 
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right"> 
                <Slide up>               
                  <VideoModal/>

                  <Blockquote 
                    styleName="blockquote--orange"
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

      <Fade>
        <HorizontalSlider
          bgColor="#F7F9FA"
        />
      </Fade>

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
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
                    <img src={grantsImg} alt="Financial Relief"/>
                  </div>
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
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Helping small businesses during the pandemic</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">

                <Slide left>
                  <div className="content-block__overflow-image">
                    <img src={reliefImg} alt="Financial Relief"/>
                  </div>
                </Slide>

              </div>
              <div className="content-block__col content-block__col--right"> 
                <p>When the calls started coming in, we knew we had to help. Small businesses were hit especially hard during the pandemic. Many were faced with cash flow constraints. A BCBSRI team of two people worked with more than 150 businesses, setting up payment plans, extending payment terms and helping connect them with available resources to help their businesses survive.</p>
                <p>With that help, businesses could tell their employees that they would not lose their health coverage in the middle of a pandemic.</p>
              
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

      <section className="content-block content-block--light-text" style={{ backgroundColor: "#003E51"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Navigating the CARES Act</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">

                <p>When Congress passed the CARES Act in March 2020, the promise of financial assistance buoyed many businesses in Rhode Island. But navigating all the pieces of the act, as well as other federal and state assistance, could be rocky, especially for small businesses with few extra resources. So BCBSRI compiled a simple guide to the many programs and made it easily accessible on our <a href="https://toolkit.bcbsri.com/collections/keeping-you-well-and-well-informed">Keeping You Well and Well-informed site</a>.</p>

              </div>
              <div className="content-block__col content-block__col--right"> 
                <p>Then we went further, using the guide to help our customers understand how they could apply for loans and grants. That assistance helped many small businesses stay afloat during the lowest economic times of the pandemic in 2020.</p>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <FullWidthImage
        bgImg={websiteImg}
        altText="Financial Relief"
      />

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
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
                    <img src={supportImg} alt="Financial Relief"/>
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

export default CustomerConveniencePage