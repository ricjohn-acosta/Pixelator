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
    </>
  )
}

export default Left
