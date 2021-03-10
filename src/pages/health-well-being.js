import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

// Components
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
// import VideoModal from "../components/video-modal/video-modal"
// import Blockquote from "../components/blockquote/blockquote"
import SmallNumber from "../components/small-number/small-number"
//import LargeNumber from "../components/large-number/large-number"
// import FullWidthImage from "../components/full-width-image/full-width-image"

//Images
import HeroImg from "../images/hero-bcg-health-well-being-fullsize.jpg"
import covidImg from "../images/covid-testing.png"
import pillIcon from "../images/icons/icon-prescription.svg"
import checkIcon from "../images/icons/icon-authorization.svg"


const HealthWellBeingPage = () => {
  return (
    <Layout>
      <Hero
        styleName="hero--blue-accent hero--health-well-being"
        bgImg={HeroImg}
        heading={["Health &", <br/>, "Well-Being"]}
        subheading="New virtual tools and innovative benefits helped Rhode Islanders gain more control over their own health and well-being."
      />

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Expanding coverage during COVID-19— at no added cost to members</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <Fade>
                  <p>To help remove barriers to care among our 400,000+ members during the pandemic, BCBSRI introduced temporary benefits that help members access the services they need—with no added worries about cost.</p>
                  <p>Our priority was to ensure our members have safe, uninterrupted access to high-quality healthcare during this pandemic—whether they needed help for COVID-19 or other health conditions.</p>
                </Fade>

                <div className="content-block__overflow-image mar-top-3">
                  <img src={covidImg} alt="Health &amp; Well-Being"/>
                </div>

              </div>
              <div className="content-block__col content-block__col--right">
                  <div className="content-block__internal-heading">
                    These temporary benefits included:
                  </div>

                  <Slide up>
                    <SmallNumber 
                      styleName="small-number--blue"
                      smallNumNumber={[<>100<sup>%</sup></>]}
                      smallNumCaption="coverage for COVID-19 testing and treatment in-network"
                    />

                    <SmallNumber 
                      styleName="small-number--blue"
                      smallNumNumber={[<>100<sup>%</sup></>]}
                      smallNumCaption="coverage for telehealth services (phone and video) in-network"
                    />

                    <div className="content-block__icon-block">
                      <div className="content-block__icon-block-icon">
                        <img src={checkIcon} alt="Check"/>
                      </div>
                      <div className="content-block__icon-block-text">
                        Waiving of prior authorization and referral requirements for COVID-19 testing and treatment
                      </div>
                    </div>
                    
                    <div className="content-block__icon-block">
                      <div className="content-block__icon-block-icon">
                        <img src={pillIcon} alt="Pill"/>
                      </div>
                      <div className="content-block__icon-block-text">
                        The ability to fill prescriptions early
                      </div>
                    </div>
                  </Slide>                
              </div> 
            </div>  
            <div className="content-block__full-width-col content-block__full-width-col--has-top-border">
              <p>We also introduced similar temporary benefits for our Medicare members, including <strong>100% coverage</strong> for inpatient care, behavioral health, diagnostic labs and imaging, and select drugs.</p>
              <p>We also coordinated with government officials to share up-to-date information regarding coronavirus disease—as well as our temporary benefits—through our Keeping You Well and Well-Informed site.</p>
            </div>   
          </div>
        </Fade>
      </section> 

      <ByTheNumbers/>
    </Layout>
  )
}

export default HealthWellBeingPage