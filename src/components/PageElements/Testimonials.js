import React from 'react'
import Loading from './Loading'
/* Carousel */
import bulmaCarousel from 'bulma-carousel'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'

/* FontAwesome */
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Testimonials extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      testimonials: []
    }
  }

  componentDidMount() {
    fetch('/json/testimonials.json')
      .then(res => {
        if (res.status === 200) return res.json()
        return []
      })
      .then(json => {
        this.setState({ testimonials: json, isLoading: false }, () => {
          bulmaCarousel.attach()
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { isLoading, testimonials } = this.state
    if (isLoading) {
      return <Loading />
    }
    if (testimonials.length === 0) {
      return null
    }
    const htmlTestimonials = testimonials.map(testimonial => {
      return <Testimonial data={testimonial} key={testimonial.author} />
    })

    return (
      <section className="hero is-gradient">
        <div className="hero-body">
          <div className="container">
            <h2 className="title has-text-centered has-text-white is-uppercase">
              Testimonials
            </h2>
            <div
              className="carousel carousel-animated carousel-animate-slide"
              data-size="1"
            >
              <div className="carousel-container">{htmlTestimonials}</div>
              <div className="carousel-navigation is-overlay">
                <div className="carousel-nav-left">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="carousel-nav-right">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

/**
 * Single Testimonial UI Component
 */
class Testimonial extends React.Component {
  constructor(props) {
    super(props)

    this.setTestimonial = this.setTestimonial.bind(this)
  }

  setTestimonial(testimonialText) {
    return { __html: testimonialText }
  }

  render() {
    const { data } = this.props

    const authorAvatar = data.avatar ? data.avatar : ''
    const authorName = data.author ? data.author : ''
    const authorDesignation = data.author ? data.designation : ''
    const testimonialText = data.testimonial ? data.testimonial : ''

    return (
      <div className="carousel-item">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-2 is-2-desktop is-3-tablet">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded border-light-green"
                    src={authorAvatar}
                    alt={authorName}
                  />
                </figure>
              </div>
              <div className="column is-10 is-10-desktop is-9-tablet mt-2rem mt-0rem-touch has-text-white">
                <h4 className="is-size-5 has-text-weight-semibold">
                  {authorName}
                  <br />
                  {authorDesignation}
                </h4>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <div className="testimonial-content">
                  <div className="testimonial-icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                  <p
                    dangerouslySetInnerHTML={this.setTestimonial(
                      testimonialText
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Testimonials
