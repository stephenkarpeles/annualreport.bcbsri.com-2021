import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import { StaticImage } from "gatsby-plugin-image"
// import Slide from 'react-reveal/Slide'

// Components
import Layout from "../components/layout/layout"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import NumberBlock from "../components/number-block/number-block"
import SplashBlock from "../components/splash-block/splash-block"
import CtaBlock from "../components/cta-block/cta-block"

const IndexPage = () => {
  const [readMore, setReadMore] = useState();

  const handleReadMore = () => {
    setReadMore(!readMore)
  }

  return (
    <Layout pageTitle="2020 BCBSRI Annual and Community Report">
          
      <SplashBlock/>

      <section className={`content-block content-block--letter-intro ${readMore ? 'content-block--letter-intro--is-open' : ''}`} style={{ backgroundColor: "#fff"}}>        
        <div className="container container--small">
            <Fade>
              <div className="content-block__intro">
                <div className="eyebrow eyebrow--color-15">Introduction</div>
                <h2>Letter from our Leadership</h2>
              </div>
            </Fade>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>There are no adequate words to describe the shock to the system that was 2020. A public health crisis led to an economic crisis. Heightened social unrest sprang from a backlash against longstanding racial injustice in our country. The crises of 2020 did not define Blue Cross &amp; Blue Shield of Rhode Island as a company, however. Rather, we regarded them as an accelerating force for change and a call to action. While our 2020 Annual and Community Report cannot fully capture the impact of these monumental events on Rhode Islanders, what you will find here is cause for hope in a portrait of strength, resilience, and caring.</p>
                <p>We saw the pandemic bring out the best in Rhode Islanders. Frontline workers — postal carriers, grocery clerks, pharmacists, delivery drivers, nursing home staff, directors of homeless shelters — and all healthcare professionals — were elevated to hero status, putting their lives on the line.</p>
                <button className="letter-read-more-btn" onClick={handleReadMore} onKeyDown={handleReadMore}>Read More</button>
                <p>Blue Cross employees were inspired. They volunteered their time to sew masks and deliver meals with Meals on Wheels. They worked with the Rhode Island Coalition for the Homeless to get necessary supplies to dozens of homeless shelters and service providers across the state to keep people safe and mitigate community spread. Our company provided $25 million in premium relief to members and customers. We served as advisors to the Department of Health and collected and shared relevant data. We waived cost sharing for telehealth visits and for testing, visits, and care related to COVID-19. At the end of the year, we delivered groceries to our most vulnerable Medicare members.</p>         
              </div>
              <div className="content-block__col content-block__col--right">
                <p>And we reinforced our commitment to comprehensive health and well-being for all Rhode Islanders. Well before the pandemic and economic crisis that followed in its wake starkly underscored the inequities in our state, we had teamed up with the Brown University School of Public Health to address social factors influencing health outcomes, like poverty and structural racism. Armed with data from our RI Life Index confirming that lack of safe and affordable housing was a barrier to Rhode Islanders’ health and well-being, we made significant grants to organizations addressing this issue.</p>
                <p>We treasure the trust you have placed in us. Going forward, we pledge to continue earning that trust. In the past year, we have learned valuable lessons about what it means to humbly listen, lead, and serve&mdash;as a resource, as a partner, and as a force for positive change. In the coming months, we look forward to welcoming new President and CEO Martha Wofford and starting our next chapter.</p>
              
                <Fade>
                  <div className="split-image-block">
                    <div className="split-image-block__col">
                      <StaticImage src="../images/bio-1.jpg" alt="Michele Lederberg"/>
                      <div className="split-image-block__name">Michele Lederberg</div>
                      <div className="split-image-block__title">Interim President &amp; CEO</div>
                      <div className="split-image-block__pronoun">She/Her/Hers</div>
                    </div>
                    <div className="split-image-block__col">
                      <StaticImage src="../images/bio-2.jpg" alt="John Langenus"/>
                      <div className="split-image-block__name">John Langenus</div>
                      <div className="split-image-block__title">Board Chair</div>
                      <div className="split-image-block__pronoun">He/Him/His</div>
                    </div>
                  </div>
                </Fade>
              </div> 
            </div>     
          </div>
        
      </section>

      <section className="investing-intro" style={{ backgroundColor: "#F7F9FA"}}>
        <div className="container">
          <Fade>
            <h3>Investing in our community</h3>
          </Fade>
        </div>
      </section>
    
      <Fade>
        <div className="flex-block">
          <NumberBlock
            numBlockNumber="200"
            numBlockCaption="organizations supported through in-kind donations, volunteerism, or financial support"
          />
          <NumberBlock
            numBlockNumber="56,646"
            numBlockCaption="people impacted by charitable funding or volunteerism"
          />
          <NumberBlock
            numBlockNumber="6,500"
            numBlockCaption="volunteer hours served"
          />
          <NumberBlock
            numBlockNumber={[<><sup>$</sup>176,800</>]}
            numBlockCaption={[<>value of volunteer hours<sup>1</sup></>]}
          />
          <NumberBlock
            numBlockNumber={[<><sup>$</sup>142,345</>]}
            numBlockCaption="generated by employee fundraising"
          />
          <NumberBlock
            numBlockNumber={[<><sup>$</sup>3,207,818</>]}
            numBlockCaption="invested by the company through financial or in-kind donations or distributions from the Blue Cross & Blue Shield of Rhode Island Community Health Fund at the RI Foundation"
          />
        </div>
        <div className="investing-footnote">
          <sup>1</sup>Source: Independent Sector
        </div>
      </Fade>

      <CtaBlock/>
      
      <ByTheNumbers/>
    </Layout>
  )
}

export default IndexPage
