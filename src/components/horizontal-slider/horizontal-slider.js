import * as React from "react"
import HorizontalScroll from 'react-scroll-horizontal'
import "./horizontal-slider.css"
import sliderImage1 from '../../images/gallery-supporting-covid-relief-efforts-1.jpg'
import sliderImage2 from '../../images/gallery-supporting-covid-relief-efforts-2.jpg'
import sliderImage3 from '../../images/gallery-supporting-covid-relief-efforts-3.jpg'
import sliderImage4 from '../../images/gallery-supporting-covid-relief-efforts-4.jpg'
import sliderImage5 from '../../images/gallery-supporting-covid-relief-efforts-5.jpg'
import sliderImage6 from '../../images/gallery-supporting-covid-relief-efforts-6.jpg'

const HorizontalSlider = (props) => {
  return (
    <div className="horizontal-slider-wrap">
      <div className="horizontal-slider" style={{ backgroundColor: props.bgColor}}>
        <HorizontalScroll
          pageLock = 'false'
          reverseScroll = 'false'
        >
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
        </HorizontalScroll>
      
        <div className="horizontal-slider__scroll-indicator">
          <span>Scroll</span>
        </div>
      </div>
    </div>
  )
}

export default HorizontalSlider
