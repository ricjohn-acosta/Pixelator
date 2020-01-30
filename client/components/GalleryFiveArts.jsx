import React from 'react'
import { Link, Route } from 'react-router-dom'

const GalleryFiveArts = (props) => {
  return (
    <div>
      {console.log('Gal5Arts')}
      <Link to="/">Hide 5x5 Arts</Link>
      <div>
        <img className="pic-sizer" src='5x5-1.png' />
        <img className="pic-sizer" src='5x5-2.png' />
        <img className="pic-sizer" src='5x5-3.png' />
        <img className="pic-sizer" src='5x5-4.png' />
      </div>
    </div>

  )
}

export default GalleryFiveArts
