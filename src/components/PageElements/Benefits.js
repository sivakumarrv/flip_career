import React from 'react'

const Benefits = props => {
  const { icon, description } = props
  return (
    <div className="column is-flex">
      <div className="box is-box-shadow border-bottom-light-green is-light is-no-border-radius is-full mt-4rem mt-0rem-touch">
        <div className="columns is-hidden-touch">
          <div className="column is-12-desktop">
            <figure className="image is-128x128 is-img-center benefits-icon">
              <img
                className="is-rounded border-light-green"
                src={icon}
                alt={description}
              />
            </figure>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="media is-vcentered">
              <div className="media-left is-hidden-desktop">
                <figure className="image is-96x96">
                  <img
                    className="is-rounded border-light-green"
                    src={icon}
                    alt={description}
                  />
                </figure>
              </div>
              <div className="media-content has-text-centered has-text-left-touch">
                <h4 className="is-size-6 has-text-weight-semibold has-text-flip-blue">
                  {description}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
