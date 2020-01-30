import React from 'react'
import { Link } from 'react-router-dom'

const Left = (props) => {
  return (
    <>
      <h1>Select grid size:</h1>
      <div>
        <h3>
          <Link to="/25">5x5</Link>
        </h3>
      </div>
      <div>
        <h3>
          <Link to="/64">8x8</Link>
        </h3>
      </div>
      <div>
        <h3>
          <Link to="/100">10x10</Link>
        </h3>
      </div>
    </>
  )
}

export default Left
