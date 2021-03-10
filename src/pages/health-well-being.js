import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

// Components
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import VideoModal from "../components/video-modal/video-modal"
import Blockquote from "../components/blockquote/blockquote"
import SmallNumber from "../components/small-number/small-number"
import LargeNumber from "../components/large-number/large-number"
// import FullWidthImage from "../components/full-width-image/full-width-image"

//Images
import HeroImg from "../images/hero-bcg-health-well-being-fullsize.jpg"
import covidImg from "../images/covid-testing.png"
import housingImg from "../images/housing.png"
import pillIcon from "../images/icons/icon-prescription.svg"
import checkIcon from "../images/icons/icon-authorization.svg"
import videoImgBlue from "../images/video-blue-across-rhode-island.jpg"
import kidsImg from "../images/keeping-kids-playing.jpg"

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
              <Fade>
                <p>We also introduced similar temporary benefits for our Medicare members, including <strong>100% coverage</strong> for inpatient care, behavioral health, diagnostic labs and imaging, and select drugs.</p>
                <p>We also coordinated with government officials to share up-to-date information regarding coronavirus disease—as well as our temporary benefits—through our Keeping You Well and Well-Informed site.</p>
              </Fade>
            </div>   
          </div>
        </Fade>
      </section> 

      <section className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Volunteering with a focus on community and safety</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>Volunteering during a pandemic is complicated, but it’s also critically important to Rhode Islanders in need of assistance. BCBSRI held our 9th annual company-wide Blue across Rhode Island volunteer day on Friday, September 25, completing projects at 15 sites across the state while following COVID-19 safety guidelines. In addition to volunteer support, each project site received a financial contribution of $5,000 to assist with their important work.</p> 

                <Slide up>
                  <VideoModal
                    caption="See the impact of Blue across Rhode Island"
                    posterImage={videoImgBlue}
                    videoSource="//www.youtube.com/embed/kcyUY10D3N4"
                  /> 
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right"> 
                <Slide up> 
                  <SmallNumber 
                    styleName="small-number--blue"
                    smallNumNumber="2,172"
                    smallNumCaption="hours of volunteer service"
                  />
                  <SmallNumber 
                    styleName="small-number--blue"
                    smallNumNumber="15"
                    smallNumCaption="nonprofit organizations assisted"
                  />
                  <SmallNumber 
                    styleName="small-number--blue"
                    smallNumNumber="12,354"
                    smallNumCaption="Rhode Islanders impacted"
                  />
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section> 

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Using data and philanthropy to address housing</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <Fade>
                  <p>The need for safe and affordable homes has never been as critical as it is now, when staying at home is the first line of defense against the spread of COVID-19. But for many Rhode Islanders, this basic need is out of reach or increasingly unstable, a finding reinforced by the data we obtained through the 2019 launch of the RI Life Index, a data source produced in partnership with the Brown University School of Public Health that focuses on the life factors influencing health and well-being.</p>
                  <p>Many of the 2,100+ Rhode Islanders who responded to both the 2019 and 2020 RI Life Index surveys see access to safe and affordable housing as a significant challenge.</p>
                  <p>With this information as the backdrop, we redirected the focus of our 2020 BlueAngel Community Health Grant program and awarded $500,000 to nine local organizations committed to improving access to affordable housing. This is in addition to the $200,000 BCBSRI awarded to five housing-related agencies at the end of 2019.</p>
                  <p><strong>2020 Housing Innovation Award</strong><br/>We were proud to receive this recognition from the Housing Network of Rhode Island.</p>
                </Fade>

                <div className="content-block__overflow-image mar-top-3">
                  <img src={housingImg} alt="Health &amp; Well-Being"/>
                </div>

              </div>
              <div className="content-block__col content-block__col--right">
                <Slide up>
                  <Blockquote 
                    styleName="blockquote--blue"
                    blockquoteText="Blue Cross is one of the leading corporate philanthropists in the state. We have seen them be a steady advocate and a leader in affordable housing in our state. Their BlueAngel fund makes significant investments in innovative housing models and provides needed advocacy."
                    blockquoteAuthor="Neil Steinberg"
                    blockquoteAuthorTitle="President &amp; CEO, Rhode Island Foundation"
                  />

                  <LargeNumber
                    styleName="large-number--blue"
                    featNumSymbol=""
                    featNumNumber="18"
                    featNumValue={[<>K<sup>+</sup></>]}
                    featNumText="Rhode Islanders impacted"
                  /> 

                  <LargeNumber
                    styleName="large-number--blue"
                    featNumSymbol="$"
                    featNumNumber="575"
                    featNumValue={[<>K<sup>+</sup></>]}
                    featNumText="To improve safe, affordable housing"
                  />  
                </Slide> 

                <div className="filler-block mar-top-10"></div>            
              </div> 
            </div>            
          </div>
        </Fade>
      </section> 

      <section className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Keeping kids playing during a pandemic</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>Since 2015, Recess Rocks in Rhode Island—a partnership between BCBSRI, Playworks, and the Rhode Island Healthy Schools Coalition—has energized education and increased safe, active, and inclusive play across Rhode Island elementary schools. Within two weeks of school closures, Playworks launched digital services to meet teachers’ needs and fit into schools’ busy schedules, including:</p> 

                <div className="content-block__list content-block__list--blue">
                  <ul>
                    <li><em>Keep Playing</em>, a weekly game and social emotional learning curriculum</li>
                    <li>Live recess three times a day</li>
                    <li>A virtual learning and play series</li>
                  </ul>
                </div>

                <p>These resources helped educators and families to bring play to every child’s day whether they were attending school remotely or in person.</p>

                <LargeNumber
                  styleName="large-number--blue"
                  featNumSymbol=""
                  featNumNumber="100"
                  featNumValue=""
                  featNumText="elementary schools trained since 2015"
                />        

              </div>
              <div className="content-block__col content-block__col--right"> 
                <Slide up> 
                  <SmallNumber 
                    styleName="small-number--blue"
                    smallNumNumber={[<>4,400<sup>+</sup></>]}
                    smallNumCaption="educators trained since 2015"
                  />
                  <SmallNumber 
                    styleName="small-number--blue"
                    smallNumNumber={[<>36,790<sup>+</sup></>]}
                    smallNumCaption="students impacted since 2015"
                  />

                  <div className="content-block__image mar-top-4">
                    <img src={kidsImg} alt="Kids Playing"/>
                  </div>
                </Slide>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <ByTheNumbers/>
    </Layout>
  )
}

export default HealthWellBeingPage