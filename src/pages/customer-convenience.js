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
import HeroImg from "../images/hero-bcg-customer-convenience.jpg"
import familyImg from '../images/family-excercise.jpg'
// import grantsImg from '../images/offering-grants-to-behavioral-health-practices.jpg'
// import reliefImg from '../images/financial-relief-small-businesses.png'
// import supportImg from '../images/supporting-providers.png'
// import websiteImg from '../images/covid19-website.jpg'
import classImg from '../images/video-try-a-class.jpg'
import groceryImg from '../images/video-grocery-delivery.jpg'
import membersImg from '../images/giving-members-more-control.jpg'
import mybcbsriImg from '../images/video-mybcbsri.jpg'
import medicareImg from '../images/video-medicare-advantage.jpg'
import manDogImg from '../images/medicare.jpg'
import smilingImg from '../images/accelerating-the-use-of-health.jpg'
import telehealthImg from '../images/telehealth.png'

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

      <section className="content-block__overlap-block content-block__overlap-block--inline">
        <Fade>
          <div className="container container--small">
            <img src={smilingImg} alt="Woman smiling"/>
          </div>
        </Fade>
      </section>

      <section className="image-number-block">
        <Fade>
          <div className="container container--small">
            <div className="image-number-block__image">
              <div className="image-number-block__image-wrap">
                <img src={telehealthImg} alt="Telehealth"/>
              </div>
            </div>
            <div className="image-number-block__number">
              <LargeNumber
                styleName="large-number--orange"
                featNumSymbol=""
                featNumNumber="31,586"
                featNumValue="%"
                featNumText="Increase in use of telehealth since 2019"
              />
            </div>
          </div>
        </Fade>
      </section>

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">            
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <Fade>
                  <SmallNumber 
                    styleName="small-number--orange small-number--below-image-number-block"
                    smallNumNumber="46%"
                    smallNumCaption="of telehealth visits in 2020 were for behavioral health services"
                  />
                </Fade>                        

              </div>
              <div className="content-block__col content-block__col--right">
                <Fade>        
                  <div className="content-block__internal-heading">
                    How we encouraged the use of telehealth:
                  </div>

                  <div className="content-block__list content-block__list--orange">
                    <ul>
                      <li>Covered services at 100% for BCBSRI Doctors Online, which offers 24/7 care as well as scheduled therapy and psychiatry visits<sup>*</sup></li>
                      <li>Covered services at 100% for in-network providers, including primary care providers, specialists, and behavioral health providers</li>
                      <li>Reimbursed providers for more telehealth services</li>
                    </ul>
                    <div className="content-block__list-footnote">
                      <sup>*</sup> Some employers do not offer Doctors Online to their employees.
                    </div>
                  </div>
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

                  <VideoModal
                    caption="Try a class"
                    posterImage={classImg}
                    videoSource="//www.youtube.com/embed/n0_Hw4RNXrI"
                  /> 
                </Slide>      

              </div>
              <div className="content-block__col content-block__col--right">
                <Fade>
                  <SmallNumber 
                    styleName="small-number--orange"
                    smallNumNumber="180"
                    smallNumCaption="classes offered in 2020"
                  />

                  <SmallNumber 
                    styleName="small-number--orange"
                    smallNumNumber="1,000"
                    smallNumCaption="average views per fitness video"
                  />                 

                  <div className="content-block__image">
                    <img src={familyImg} alt=""/>
                  </div>  

                  <Blockquote 
                    styleName="blockquote--orange"
                    blockquoteText="Thank you for these classes! We soooo need them."
                    blockquoteAuthor="Angela"
                    blockquoteAuthorTitle="BCBSRI member"
                  />
                </Fade>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section className="content-block content-block--bottom-padding-large content-block--light-text" style={{ backgroundColor: "#003E51"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-20">Customer Convenience</div>
              <h2>Making healthcare easier for Medicare members</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>In 2020, our members took advantage of the enhanced benefits available through BCBSRI Medicare Advantage plans, such as $0 transportation to doctors’ appointments, $0 meal delivery after hospitalization, $0 generic drugs, and a quarterly over-the-counter benefit.</p>
                <p>The Net Promoter Score—a measure of member satisfaction—for our Medicare Advantage plans was 65 compared to a healthcare industry average of 19. We offered these same benefits, plus more, for 2021.</p> 

                <Fade>
                  <SmallNumber 
                    styleName="small-number--light-orange-dark-bg"
                    smallNumNumber="98.2%"
                    smallNumCaption="member retention during the 2021 Annual Enrollment Period for Medicare"
                  />
                </Fade>   
              </div>
              <div className="content-block__col content-block__col--right">
                <Fade>
                  <VideoModal
                    caption="Find out more about our enhanced Medicare Advantage benefits."
                    posterImage={medicareImg}
                    videoSource="//www.youtube.com/embed/_WdsbySq4RQ"
                  /> 
                </Fade>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>    

      <section className="content-block__overlap-block">
        <div className="container container--small">
          <img src={manDogImg} alt="Man with dog"/>

          <Blockquote 
            styleName="blockquote--orange"
            blockquoteText="The over-the-counter benefit (OTC) … has been extremely helpful especially during this pandemic. I did not need to leave my house to get needed CVS products. And it is nice that it is all free, no delivery charge. Can’t wait for next quarter’s order."
            blockquoteAuthor="B. Carl"
            blockquoteAuthorTitle="Medicare member"
          />
        </div>
      </section>  
      
      <section className="content-block" style={{ backgroundColor: "#f7f9fa"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Delivering free groceries to high-risk Medicare members</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>To help older Rhode Islanders stay safe and healthy at home, BCBSRI delivered weekly groceries at no cost to 2,000+ high-risk Medicare Advantage members starting in December.</p> <p>These free groceries include staples like milk, eggs, fruits and vegetables, cheese, pasta, bread, toilet paper, paper towels, hand sanitizer, and other essential items. Whenever possible, groceries were sourced from local farms and vendors, which supported nine Rhode Island small businesses.</p>
                <p>BCBSRI partnered with West Warwick-based Millonzi Fine Catering. They were able to hire several people who recently lost their jobs as a result of COVID-19. Our members were so enthusiastic about the program that we extended it into 2021.</p>    

                <VideoModal
                  caption="Hear from a senior who received (and loved) the grocery deliveries"
                  posterImage={groceryImg}
                  videoSource="//sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/640934f2207f434eb4d5f982f0f90421.m3u8&autostart=false"
                /> 

              </div>
              <div className="content-block__col content-block__col--right">              
                
                <Fade>
                  <Blockquote 
                    styleName="blockquote--orange"
                    blockquoteText="Thank you for sending groceries to us seniors confined to our homes. My first delivery of food was chosen well, very healthy, and delicious. I have been a member of BCBSRI since I retired some 20 years ago and have been very pleased with the service your company has provided me all these years."
                    blockquoteAuthor="Ann"
                    blockquoteAuthorTitle="Medicare member"
                  />
                </Fade>
              </div> 
            </div>     
          </div>
        </Fade>
      </section>

      <section className="content-block" style={{ backgroundColor: "#fff"}}>
        <Fade>
          <div className="container container--small">
            <div className="content-block__intro">
              <div className="eyebrow eyebrow--color-23">Customer Convenience</div>
              <h2>Giving members more control</h2>
            </div>
            <div className="content-block__col-wrap">
              <div className="content-block__col content-block__col--left">
                <p>In 2020, we rolled out a new online experience for members: <a href="https://myportal.bcbsri.com/">myBCBSRI</a>. Now when members log in, they can view and make changes to many more elements of their plan. They gain easy access to their digital ID cards, electronic documents, claim status, and benefit information.</p>

                <div className="content-block__internal-heading">
                  They also can:
                </div>

                <div className="content-block__list content-block__list--orange">
                  <ul>
                    <li>Choose how they want to receive communications about their plan</li>
                    <li>See previous questions they’ve asked us, whether it was online, on the phone, or in person at Your Blue Store<sup>SM</sup></li>
                    <li>Select or update their primary care provider (PCP)</li>
                    <li>Find personalized costs for office visits, tests, and procedures</li>
                    <li>Review all their benefits&mdash;medical, dental, or vision</li>
                    <li>Learn how to earn rewards for healthy activities</li>
                    <li>View and pay their premiums</li>
                  </ul>
                </div>

                <VideoModal
                  caption="See how myBCBSRI works"
                  posterImage={mybcbsriImg}
                  videoSource="//www.youtube.com/embed/8zRoR-UVcrI"
                /> 

              </div>
              <div className="content-block__col content-block__col--right">            
                <Fade>
                  <div className="content-block__image">
                    <img src={membersImg} alt="Customer Convenience"/>
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