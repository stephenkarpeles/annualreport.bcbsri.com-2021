import React, { useState } from "react"
// import { Link } from "gatsby"
// import Fade from 'react-reveal/Fade';
import "./accordion.css"
// import arrowRight from '../../images/icons/arrow-right.svg'

const accordionItems = [
  {
    id: 1,
    title: ["Total Revenue ",<sup>$</sup>,"1,716,003,000"],
    content: [
    <>
      <p>In 2020, we recorded $1.70 billion in premiums from members (individuals and employers). We also recorded an $8.8 million gain on investment revenue.</p>
      <div className="by-the-numbers__number-block--small">
        <div className="by-the-numbers__number-amount"><sup>$</sup>1,707,243,000</div>
        <div className="by-the-numbers__number-caption">Premium Revenue</div>
      </div>
      <div className="by-the-numbers__number-block--small">
        <div className="by-the-numbers__number-amount">+<sup>$</sup>8,760,000</div>
        <div className="by-the-numbers__number-caption">Investment Revenue</div>
      </div> 
      <div className="by-the-numbers__number-block">
        <div className="by-the-numbers__number-amount"><sup>$</sup>1,716,003,000</div>
        <div className="by-the-numbers__number-caption">Total Revenue</div>
      </div>
      <div className="by-the-numbers__content-footnote">
        <span>Numbers may not add up due to rounding.</span>
      </div>
    </>
    ],
  },
  {
    id: 2,
    title: ["Total Expenses ",<sup>$</sup>,"1,673,582,000"],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id: 3,
    title: ["Net Gain ",<sup>$</sup>,"42,421,000"],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
];

const AccordionItem = ({
  title = '',
  content = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <div className={isActive ? 'accordion-item' : 'accordion-item accordion-item--inactive'} onClick={onItemClicked} onKeyDown={onItemClicked} role="button" tabIndex="0">
      <div className="accordion-item__title">
        <h4>{title}</h4>
        <div className="accordion-item__arrow">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
             viewBox="0 0 48 48">          
          <path id="Arrow" class="st0" d="M48,24l-3.8-6L43,18.8l2.8,4.4H0v1.5h45.7L43,29.2l1.3,0.8L48,24L48,24z"/>
          </svg>  
        </div>
      </div>
      <div className="accordion-item__content">
        {content}
      </div>
    </div>
  )
}

const Accordion = () => {
 const [active, setActive] = useState(0);
  
  return (
    <div className="accordion-wrapper">
      <div className="accordion-items">
        {accordionItems.map(({ id, title, content }) =><AccordionItem
           key={id}
           title={title}
           content={content}
           onItemClicked={() => setActive(id)}
           isActive={active === id}
         />
      )}
      </div>
     </div>
  )
}

export default Accordion
