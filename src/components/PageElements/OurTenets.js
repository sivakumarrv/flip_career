import React from 'react'

const OurTenets = props => {
  const { icon, title, description } = props
  return (
    <div className="column is-flex mtb-1rem" id="ourTenetsWrapper">
      <div className="is-full padding-1rem">
        <figure className="image is-img-center is-200x200 mb-1rem">
          <img src={icon} alt={title} />
        </figure>
        <h4 className="is-size-5 has-text-flip-blue mt-1rem">
          <strong>{title}</strong>
        </h4>
        <p className="is-size-6">{description}</p>
      </div>
    </div>
  )
}

export default OurTenets
