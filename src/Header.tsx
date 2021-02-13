import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

import './Header.css'

function Header(): JSX.Element {
  return (
    <nav className="header-belt">
      <Link to="/">
        <div className="header-left">
          <div className="header__logo">
            <a href="/" className="logo-link">
              <span className="nav-sprite" />
              <span className="nav-logo-locale">.in</span>
            </a>
          </div>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Kiran</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link> */}
        <Link to="/checkout" className="header__link">
          <div className="header__cart">
            <div className="header__cartCount">10</div>
            <div className="header__cartIcon" />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
