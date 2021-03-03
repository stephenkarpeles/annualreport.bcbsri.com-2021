import React, { useState } from "react"
// import { Link } from "gatsby"
// import Fade from 'react-reveal/Fade';
import "./accordion.css"

const accordionItems = [
  {
    id: 1,
    title: 'Title 1',
    content: ["In 2019, premium reserves that we held for the protection of our members totaled $372 million at year end.", <br/>, "In 2019, premium reserves that we held for the protection of our members totaled $372 million at year end."],
  },
  {
    id: 2,
    title: 'Title 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id: 3,
    title: 'Title 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id: 4,
    title: 'Title 4',
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
      </div>
      <div className="accordion-item__content">
        {content}
      </div>
    </div>
  )
};

const Accordion = () => {
 const [active, setActive] = useState(1);
  
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
