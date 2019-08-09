import React from 'react'
import Loading from './Loading'
import SectionTitle from './SectionTitle'
/* Carousel */
import bulmaCarousel from 'bulma-carousel'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'

/* FontAwesome */
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FunEvents extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      funEvents: [],
      dataSize: 3
    }

    this.updateCarouselDataSize = this.updateCarouselDataSize.bind(this)
  }

  componentDidMount() {
    this.updateCarouselDataSize()
    fetch('/json/fun-events.json')
      .then(res => {
        if (res.status === 200) return res.json()
        return []
      })
      .then(json => {
        this.setState({ funEvents: json, isLoading: false }, () => {
          bulmaCarousel.attach()
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * Check the screen width and apply the data size
   * @param {function} callback
   */
  updateCarouselDataSize(callback) {
    const d = document.documentElement
    const width =
      window.innerWidth ||
      d.clientWidth ||
      d.getElementsByTagName('body')[0].clientWidth

    const newDataSize = width > 768 ? 3 : 1

    if (newDataSize !== this.dataSize) {
      this.setState({ dataSize: newDataSize }, () => {
        if (typeof callback === 'function') {
          callback()
        }
      })
    }
  }

  render() {
    const { isLoading, funEvents, dataSize } = this.state
    if (isLoading) {
      return <Loading />
    }
    if (funEvents.length === 0) {
      return null
    }
    const htmlFunEvents = funEvents.map(funEvent => {
      return <FunEvent data={funEvent} key={funEvent.img_url} />
    })

    return (
      <React.Fragment>
        <SectionTitle title="Celebrations:" />
        <div
          className="carousel carousel-animated carousel-animate-slide"
          data-size={dataSize}
          data-autoplay="true"
        >
          <div className="carousel-container">{htmlFunEvents}</div>
          <div className="carousel-navigation is-overlay">
            <div className="carousel-nav-left has-text-grey-darker">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="carousel-nav-right has-text-grey-darker">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

/**
 * Single Fun Event UI Component
 * @param {*} props
 */
const FunEvent = props => {
  const { data } = props
  const imgCaption = data.img_caption ? data.img_caption : ''
  const showCaption = data.show_caption ? data.show_caption : false
  const captionLink = data.img_caption_link ? data.img_caption_link : ''

  return (
    <div className="carousel-item has-background">
      <figure className="image is-square">
        <img className="is-background" src={data.img_url} alt={imgCaption} />
        {showCaption && (
          <CaptionLink captionLink={captionLink} imgCaption={imgCaption} />
        )}
      </figure>
    </div>
  )
}

/**
 * Caption Link element
 * @param {*} props
 */
const CaptionLink = props => {
  const { captionLink, imgCaption } = props
  return captionLink !== '' ? (
    <a href={captionLink} target="_blank" rel="noreferrer noopener">
      <CaptionDiv imgCaption={imgCaption} />
    </a>
  ) : (
    <CaptionDiv imgCaption={imgCaption} />
  )
}

/**
 * Caption element
 * @param {*} props
 */
const CaptionDiv = props => {
  const { imgCaption } = props

  return <div className="title is-size-6">{imgCaption}</div>
}

export default FunEvents
