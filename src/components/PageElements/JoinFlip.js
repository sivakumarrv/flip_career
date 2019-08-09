import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ReactPlayer from 'react-player'

import { CURRENT_OPENINGS, JOIN_FLIP } from '../../constants/SiteContent'

const JoinFlip = () => {
  return (
    <section className="hero is-gradient" id="joinFlip">
      <div className="hero-body">
        <div className="container">
          <h2 className="title has-text-centered is-uppercase has-text-white">
            {JOIN_FLIP}
          </h2>
          <div className="columns">
            <div className="column is-three-fifths">
              <p className="has-text-left is-size-5 lh-2-5rem has-text-white">
                Our focus is on building a team of <b>like-minded people</b> who
                will own and drive FLIP&rsquo;s business &ndash; work across
                functions and bring the vision to life. If you&rsquo;re looking
                for an organization where your <b>efforts are noticed,</b> your{' '}
                <b>opinion matters</b> and where you can{' '}
                <b>see the difference you&rsquo;re making,</b> then read
                on&hellip;
              </p>
              <ScrollLink
                activeClass="active"
                className="button is-flip-yellow is-no-border mt-3rem"
                to="currentOpenings"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                See {CURRENT_OPENINGS}
              </ScrollLink>
            </div>
            <div className="column">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url="https://youtu.be/uobK2tlfhHc"
                  width="100%"
                  height="300px"
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinFlip
