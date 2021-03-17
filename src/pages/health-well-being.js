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
import HorizontalSlider from "../components/horizontal-slider/horizontal-slider"
// import FullWidthImage from "../components/full-width-image/full-width-image"

//Images
import HeroImg from "../images/hero-bcg-health-wellbeing-new-gradient.jpg"
import covidImg from "../images/covid-testing.png"
import housingImg from "../images/housing.png"
import pillIcon from "../images/icons/icon-prescription.svg"
import checkIcon from "../images/icons/icon-authorization.svg"
import videoImgBlue from "../images/video-blue-across-rhode-island.jpg"
import videoImgOffice from "../images/video-oak-street-health.jpg"
import kidsImg from "../images/keeping-kids-playing.jpg"
import healthImg1 from "../images/oak-street-health-img-1.jpg"
import healthImg2 from "../images/oak-street-health-img-2.jpg"
import safeImg from "../images/safe-zone-img.jpg"
import ibramImg from "../images/ibram-kendi.jpg"
import ashishImg from "../images/ashish-jha.jpg"
import bestPlacesImg from "../images/logo-best-places-to-work.jpg"
import bellSealImg from "../images/logo-bell-seal.png"
import disabilityImg from "../images/logo-disability-equality-index.jpg"
import blueAcrossLogo from "../images/logo-blue-across-ri.png"

const HealthWellBeingPage = () => {
  return (
    <Layout>
      <Hero
        styleName="hero--blue-accent hero--health-well-being"
        bgImg={HeroImg}
        heading={["Health &", <br/>, "Well-Being"]}
        subheading="New virtual tools and innovative benefits helped Rhode Islanders gain more control over their own health and well-being."
      />

      <section id="expanding-coverage" className="content-block" style={{ backgroundColor: "#fff"}}>
        <div className="container container--small">
            <Fade>
              <div className="content-block__intro">
                <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
                <h2>Expanding coverage during COVID-19— at no added cost to members</h2>
              </div>
            </Fade>
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
                  <Fade>
                    <div className="content-block__internal-heading">
                      These temporary benefits included:
                    </div>
                  </Fade>

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
      </section> 

      <section id="volunteering" className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <div className="container container--small">
            <Fade>
              <div className="content-block__intro">
                <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
                <h2>Volunteering with a focus on community and safety</h2>
              </div>
            </Fade>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>Volunteering during a pandemic is complicated, but it’s also critically important to Rhode Islanders in need of assistance. BCBSRI held our 9th annual company-wide Blue across Rhode Island volunteer day on Friday, September 25, completing projects at 15 sites across the state while following COVID-19 safety guidelines.</p>
                <p>In addition to volunteer support, each project site received a financial contribution of $5,000 to assist with their important work.</p> 

                <Slide up>
                  <VideoModal
                    caption={[<><u>See the impact</u> of Blue across Rhode Island</>]}
                    posterImage={videoImgBlue}
                    videoSource="//www.youtube.com/embed/kcyUY10D3N4"
                  /> 
                </Slide>         

              </div>
              <div className="content-block__col content-block__col--right"> 
                <Slide up> 
                  <div className="mar-bot-4 mar-top-2 blue-across-ri-logo-wrap">
                    <img src={blueAcrossLogo} alt="Blue Across Rhode Island"/>
                  </div>
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
      </section> 

      <section style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <HorizontalSlider/>
        </Fade>
      </section>

      <section id="using-data-and-technology" className="content-block" style={{ backgroundColor: "#fff"}}>
        <div className="container container--small">
          <Fade>
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Using data and philanthropy to address housing</h2>
            </div>
          </Fade>
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
      </section> 

      <section id="keeping-kids-playing" className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <div className="container container--small">
          <Fade>
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Keeping kids playing during a pandemic</h2>
            </div>
          </Fade>
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

              <Fade>
                <LargeNumber
                  styleName="large-number--blue"
                  featNumSymbol=""
                  featNumNumber="100"
                  featNumValue=""
                  featNumText="elementary schools trained since 2015"
                /> 
              </Fade>       

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

                <div className="mar-top-8">
                  <img src={kidsImg} alt="Kids Playing"/>
                </div>
              </Slide>
            </div> 
          </div>     
        </div>
      </section>

      <section id="bringing-oak-street-health" className="content-block" style={{ backgroundColor: "#fff"}}>
        <div className="container container--small">
          <Fade>
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Bringing Oak Street Health to more members</h2>
            </div>
          </Fade>
          <div className="content-block__col-wrap">
            <div className="content-block__col content-block__col--left">
              <Fade>
                <p>In the last two years, Oak Street Health, a network of primary care practices for adults on Medicare, has opened four locations in Rhode Island in collaboration with BCBSRI. The fourth location opened in November 2020 in Woonsocket. Through their well care model, Oak Street Health provides in-person, phone, and video visits; a 24/7 support line; transportation to appointments; and preventive care plans.</p> 
                <div className="mar-top-3 mar-bot-4">
                  <img src={healthImg2} alt="Health"/>
                </div>
              </Fade>
            </div>
            <div className="content-block__col content-block__col--right"> 
              <Slide up>
                <div className="mar-bot-4">
                  <img src={healthImg1} alt="Health"/>
                </div>
                <VideoModal
                  caption={[<>Take a <u>virtual tour</u></>]}
                  posterImage={videoImgOffice}
                  videoSource="//www.youtube.com/embed/sA8v0ZttJ9c"
                /> 
              </Slide>
            </div> 
          </div>     
        </div>
      </section>

      <section id="achieving-our-vision" className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <div className="container container--small">
          <Fade>
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-15">Health &amp; Well-Being</div>
              <h2>Achieving our vision through Diversity, Equity &amp; Inclusion</h2>
            </div>
          </Fade>
          <div className="content-block__full-width-col content-block__full-width-col--no-spacing">
            <Fade>
              <p>Passionately leading a state of health and well-being across Rhode Island requires honest input and innovative solutions to longstanding issues such as systemic racism that lead to health inequities. Diversity, equity, and inclusion are integral to our workplace culture and our approach to providing healthcare.</p>
            </Fade>

            <div className="mar-top-7 mar-bot-4"> 
              <div className="eyebrow eyebrow--color-15 eyebrow--no-indent">DEI highlights of 2020</div>
            </div>

          </div> 

          <Fade>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left mar-bot-3">
                <h3 className="heading-alt">
                  Added 5 new Safe Zones
                </h3>
                <div className="mar-top-4 mar-bot-4">
                  <img src={safeImg} alt="Safe Zone"/>
                </div>
                <p>We now have <a href="/">41 sites</a> certified to provide safe, affirming, and inclusive care to the LGBTQ community.</p>                
              </div>
              <div className="content-block__col content-block__col--right mar-bot-3"> 
                <h3 className="heading-alt">
                  Provided education on antiracism
                </h3>
                <div className="mar-top-4 mar-bot-4">
                  <img src={ibramImg} alt="Safe Zone"/>
                </div>
                <p>The keynote speaker for our employee Diversity Week was <a href="/">Dr. Ibram X. Kendi</a>, one of America’s foremost historians and leading antiracist voices. He is the author of <em>Stamped from the Beginning</em> and <em>How to be an Antiracist</em>.</p>                 
              </div> 
            </div> 
          </Fade>

          <div className="content-block__full-width-col mar-top-10">
            <h3 className="heading-alt">
              Held a COVID discussion on health equity
            </h3>
          </div>

          <Fade>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <div className="mar-top-4 mar-bot-4">
                  <img src={ashishImg} alt="Ashish Jha"/>
                </div>
                <p>At our annual all-employee and community meeting, Dr. Ashish Jha, Dean of the Brown University School of Public Health, and Austin Frakt, Associate Professor at the Boston University School of Public Health, discussed how we can address the great disparities in health and healthcare exacerbated by the pandemic.</p>                
              </div>
              <div className="content-block__col content-block__col--right">
                <div className="mar-top-2">
                  <Blockquote 
                    styleName="blockquote--blue"
                    blockquoteText="We have to think about the social factors that create the conditions for what has happened as a result of the pandemic, but we also have to think about the healthcare system’s response to those conditions… given all the inequities in our society, the healthcare system must be part of the solution and not part of the problem."
                    blockquoteAuthor="Dr. Ashish Jha"
                    blockquoteAuthorTitle="Dean, Brown University School of Public Health"
                  />  
                </div>     
              </div> 
            </div>
          </Fade>

          <div className="content-block__full-width-col">
            <div className="mar-top-4 mar-bot-5"> 
              <div className="eyebrow eyebrow--color-15 eyebrow--no-indent">Honored to be recognized for DEI</div>
            </div>

            <Fade>
              <h3 className="heading-alt">
                2020 Corporate Equality Index
              </h3>
              <div className="media-element">
                <div className="media-element__image">
                  <img src={bestPlacesImg} alt="Best Places to Work"/>
                </div>
                <div className="media-element__text">
                  <p>With a score of 100%, we were the only Rhode Island company to have received a perfect score on this national measure of LGBTQ workplace equality for the past six years consecutively.</p>
                </div>
              </div>

              <h3 className="heading-alt">
                Bell Seal for Mental Health: Platinum
              </h3>
              <div className="media-element">
                <div className="media-element__image">
                  <img src={bellSealImg} alt="Workplace Mental Health Award"/>
                </div>
                <div className="media-element__text">
                  <p>Mental Health America awarded BCBSRI the highest possible designation a company can achieve for our commitment to the mental health and well-being of our employees. We are the first company in Rhode Island to receive a platinum designation.</p>
                </div>
              </div>

              <h3 className="heading-alt">
                2020 Disability Equality Index
              </h3>
              <div className="media-element">
                <div className="media-element__image">
                  <img src={disabilityImg} alt="Disability Equality Index Score of 100"/>
                </div>
                <div className="media-element__text">
                  <p>We were one of two companies headquartered in Rhode Island to receive a top score of 100 on this national benchmarking survey and report on disability workplace equality.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <ByTheNumbers/>
    </Layout>
  )
}

export default HealthWellBeingPage