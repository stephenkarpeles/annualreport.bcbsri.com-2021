import React from 'react';
import "./header.css"

const Header = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"

  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass)
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__toggle-menu-btn" 
          role="button" 
          tabIndex={0} 
          onClick={() => {
            scrollTop();
            toggleMegaMenuClass();
          }} 
          onKeyDown={() => {
            scrollTop();
            toggleMegaMenuClass();
          }}
        >
          <div className="header__toggle-menu-btn-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__toggle-menu-btn-text">
            Menu
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
