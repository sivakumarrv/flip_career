import React from 'react'

/* FontAwesome */
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link as ScrollLink } from 'react-scroll'

const FullHeightBanner = () => {
  return (
    <section className="flip-team hero is-link is-fullheight" id="pageTop">
      <div className="hero-body " />
      <div className="hero-foot has-text-centered">
        <div className="container">
          <h2 className="title mb-2rem">#LifeAtFLIP</h2>
          <ScrollLink
            className="mt-1rem"
            to="joinFlip"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className="is-size-4 mb-1rem"
            />
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

export default FullHeightBanner
