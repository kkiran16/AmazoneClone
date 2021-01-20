import React from 'react'

import './Header.css'

function Header(): JSX.Element {
  return (
    <nav className="header-belt">
      <div className="header-left">
        <div className="header__logo">
          <a href="/" className="logo-link">
            <span className="nav-sprite" />
            <span className="nav-logo-locale">.in</span>
          </a>
        </div>
      </div>
      {/*  <img
        className="header__logo"
        alt="Amazon Header"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png"
      /> */}
    </nav>
  )
}

export default Header
