import React, { useState } from "react"
import "./accordion.css"

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
        <div className="by-the-numbers__number-amount">+ <sup>$</sup>8,760,000</div>
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
    content: [
      <>
        <p>From total revenue, $1.40 billion was used for medical and dental claims for our members. This amount accounted for 82.2% of premium revenue collected. The company spent $232.2 million (including premium taxes) on expenses to support the core operations of our business, or 13.6% of premiums. An additional $74.3 million was spent on other expenses, including $33.6 million on assessments required by the Affordable Care Act. The company also recorded a $36.3 million offset to expenses for the final installment of the Federal Tax Refund.</p>
        <div className="by-the-numbers__number-block--small">
          <div className="by-the-numbers__number-amount"><sup>$</sup>1,403,372,000</div>
          <div className="by-the-numbers__number-caption">Payments to Providers</div>
        </div>
        <div className="by-the-numbers__number-block--small">
          <div className="by-the-numbers__number-amount">+ <sup>$</sup>232,177,000</div>
          <div className="by-the-numbers__number-caption">Administrative Expenses</div>
        </div> 
        <div className="by-the-numbers__number-block--small">
          <div className="by-the-numbers__number-amount">+ <sup>$</sup>74,291,000</div>
          <div className="by-the-numbers__number-caption">Other Expenses</div>
        </div>
        <div className="by-the-numbers__number-block--small">
          <div className="by-the-numbers__number-amount">- <sup>$</sup>36,258,000</div>
          <div className="by-the-numbers__number-caption">Federal Tax Refund</div>
        </div>
        <div className="by-the-numbers__number-block">
          <div className="by-the-numbers__number-amount"><sup>$</sup>1,673,582,000</div>
          <div className="by-the-numbers__number-caption">Total Expenses</div>
        </div>
        <div className="by-the-numbers__content-footnote">
          <span>Numbers may not add up due to rounding.</span>
        </div>
      </>
    ],
  },
  {
    id: 3,
    title: ["Net Gain ",<sup>$</sup>,"42,421,000"],
    content: [
      <>
        <p>Overall, total revenue stood at just over $1.71 billion, and expenses exceeded $1.67 billion in 2020, resulting in a net gain of $42.4 million.</p>
        <div className="by-the-numbers__number-block">
          <div className="by-the-numbers__number-amount"><sup>$</sup>42,421,000</div>
        </div>
      </>
    ],
  },
];

const AccordionItem = ({
  styleName='',
  title = '',
  content = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {

  const [isActiveTab, setActiveTab] = useState('false');

  const handleToggle = () => {
    setActiveTab(!isActiveTab);
  };

  return (
    <div className={`${isActiveTab ? 'accordion-item' : 'accordion-item accordion-item--active'}`} onClick={handleToggle} onKeyDown={onItemClicked} role="button" tabIndex="0">
      <div className="accordion-item__title">
        <h4>{title}</h4>
        <div className="accordion-item__arrow">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
             viewBox="0 0 48 48">          
          <path id="Arrow" className="st0" d="M48,24l-3.8-6L43,18.8l2.8,4.4H0v1.5h45.7L43,29.2l1.3,0.8L48,24L48,24z"/>
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
