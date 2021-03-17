import * as React from "react"
// import HorizontalScroll from 'react-scroll-horizontal'
import "./horizontal-slider-alt.css"
import sliderImage1 from '../../images/gallery-volunteering-with-focus-1.jpg'
import sliderImage2 from '../../images/gallery-volunteering-with-focus-3.jpg'
import sliderImage3 from '../../images/gallery-volunteering-with-focus-4.jpg'
import sliderImage4 from '../../images/gallery-volunteering-with-focus-5.jpg'
import sliderImage5 from '../../images/gallery-volunteering-with-focus-6.jpg'
import sliderImage6 from '../../images/gallery-volunteering-with-focus-7.jpg'
import sliderImage7 from '../../images/gallery-volunteering-with-focus-8.jpg'
import sliderImage8 from '../../images/gallery-volunteering-with-focus-9.jpg'
import sliderImage9 from '../../images/gallery-volunteering-with-focus-10.jpg'
import sliderImage10 from '../../images/gallery-volunteering-with-focus-11.jpg'

const HorizontalSlider = () => {
  return (
    <div className="horizontal-slider-wrap">
      <div className="horizontal-slider">        
        <div className="horizontal-slider__slide">
          <img src={sliderImage1} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage2} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage3} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage4} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage5} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage6} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage7} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage8} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage9} alt="Slider"/>
        </div>
        <div className="horizontal-slider__slide">
          <img src={sliderImage10} alt="Slider"/>
        </div>
      </div>
      <div className="horizontal-slider__scroll-indicator">
        <span>Scroll</span>
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
           viewBox="0 0 16 16" >
        <path fill="#0079B5" id="Icon" d="M12,8c0,0.2-0.1,0.4-0.2,0.5l-4.4,5.2c-0.3,0.3-0.8,0.4-1.1,0.1c-0.3-0.2-0.4-0.7-0.1-1c0,0,0,0,0,0l4-4.7l-4-4.8
          C5.9,2.9,6,2.5,6.3,2.2c0,0,0,0,0,0C6.6,1.9,7.1,2,7.4,2.3l4.4,5.2C11.9,7.6,12,7.8,12,8z"/>
        </svg>
      </div>
    </div>
  )
}

export default HorizontalSlider
