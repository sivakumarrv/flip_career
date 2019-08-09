import React from 'react'

const SectionTitle = props => {
  return (
    <h4 className="has-text-left has-text-link subtitle-hr-line is-uppercase is-size-5 has-text-weight-semibold mt-2rem mb-1rem">
      {props.title}
    </h4>
  )
}

export default SectionTitle
