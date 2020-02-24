import React from 'react'
import { Link, Route } from 'react-router-dom'

const GalleryEight = (props) => {
  return (
    <div>
      <h3>Example 8x8 Pixel Arts</h3>
      {console.log('Gal8')}
      <Link to="/gal8/arts">See some 8x8 Art!</Link>
    </div>
  )
}

export default GalleryEight
