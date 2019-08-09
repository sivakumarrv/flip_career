import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollLink, scrollSpy as ScrollSpy } from 'react-scroll'

import { LOGO } from '../../constants/SiteElements'
import {
  CURRENT_OPENINGS,
  OUR_CULTURE,
  JOIN_FLIP
} from '../../constants/SiteContent'

class Nav extends React.Component {
  componentDidMount() {
    ScrollSpy.update()
  }

  render() {
    return (
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <ScrollLink
            activeClass="inactive"
            className="navbar-item"
            to="pageTop"
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={LOGO} alt="FLIP Logo" className="flip-logo" />
          </ScrollLink>
          <ScrollLink
            role="button"
            className="navbar-burger burger"
            to="" // Purposefully left it blank
            spy={false}
            aria-label="menu"
            aria-expanded="false"
            data-target="flipCareersNavbar"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </ScrollLink>
        </div>

        <div id="flipCareersNavbar" className="navbar-menu">
          <div className="navbar-end">
            <ScrollLink
              activeClass="inactive"
              className="navbar-item"
              to="pageTop"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={faHome} />
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="navbar-item"
              to="joinFlip"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {JOIN_FLIP}
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="navbar-item"
              to="ourCulture"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {OUR_CULTURE}
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="navbar-item"
              to="currentOpenings"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {CURRENT_OPENINGS}
            </ScrollLink>
          </div>
        </div>
      </nav>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Add a click event on burger
  const navBarBurger = document.querySelector('.navbar-burger')
  navBarBurger.addEventListener('click', () => {
    // Get the target from the "data-target" attribute
    const target = navBarBurger.dataset.target
    const $target = document.getElementById(target)

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    navBarBurger.classList.toggle('is-active')
    $target.classList.toggle('is-active')
  })
})

export default Nav
