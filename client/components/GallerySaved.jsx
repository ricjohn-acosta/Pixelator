import React from 'react'
import { Link, Route } from 'react-router-dom'

const GallerySaved = (props) => {
  return (
    <div>
      <h3 class='body-text'>My Saved Images</h3>
      {console.log('saved')}
      <Link to="/galSavedArts">Saved Images</Link>
    </div>
  )
}

export default GallerySaved
