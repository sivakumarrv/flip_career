import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
  return (
    <div className="column is-flex">
      <div className="card is-shadowless is-full">
        <div className="card-content">
          <h4 className="is-size-5">
            <FontAwesomeIcon icon={faSpinner} spin />
            &nbsp; Loading...
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Loading
