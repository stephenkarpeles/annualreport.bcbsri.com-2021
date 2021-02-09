import React from 'react';
import "./header.css"

const Header = () => {
  const MegaMenuOpenClass = "mega-menu-is-open"

  function toggleMegaMenuClass() {
    document.body.classList.toggle(MegaMenuOpenClass)
  }

  return (
    <header className="header">
      <button onClick={toggleMegaMenuClass}>
        Menu
      </button>
    </header>
  )
}

export default Header
