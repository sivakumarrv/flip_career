import React from 'react'
import {
  faFacebookSquare,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLinks = [
  {
    name: 'Facebook',
    icon: faFacebookSquare,
    link: 'https://www.facebook.com/LifeatFLIP/',
    icon_id: 'socialFb'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/showcase/careers-at-flip/',
    icon_id: 'socialLi'
  }
]

const Footer = () => {
  const htmlSocialIcons = socialLinks.map(socialLink => {
    return <SocialIcon key={socialLink.name} data={socialLink} />
  })
  return (
    <footer className="footer is-light">
      <div className="columns">
        <div className="column">
          <h3 className="has-text-centered subtitle has-text-link mb-1rem has-text-weight-semibold">
            Follow us
          </h3>
          <div className="buttons is-centered">{htmlSocialIcons}</div>
          <p className="has-text-centered has-text-flip-blue">
            &copy; {new Date().getFullYear()} Finitiatives Learning India Pvt.
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = props => {
  const data = props.data
  const socialName = data.name
  const socialLink = data.link
  const socialIcon = data.icon
  const socialIconId = data.icon_id
  return (
    <a
      href={socialLink}
      target="_blank"
      rel="noopener noreferrer"
      className="button has-text-white is-no-border"
      id={socialIconId}
    >
      <span className="icon">
        <FontAwesomeIcon icon={socialIcon} />
      </span>
      {socialName}
      <span />
    </a>
  )
}

export default Footer
