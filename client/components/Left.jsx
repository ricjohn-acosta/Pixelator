import React from 'react'
import { Link, Route } from 'react-router-dom'

import GallerySavedArts from './GallerySavedArts'
import GallerySaved from './GallerySaved'

const Left = (props) => {
  return (
    <>
    <h1>My Saved Images</h1>
    <div>
      <Link to="/galSavedArts">Show Saved Art</Link>
      <Route path="/galSavedArts" component={ GallerySavedArts } />
      {console.log('Main ')}
    </div>
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
