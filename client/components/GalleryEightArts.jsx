import React from 'react'
import { Link, Route } from 'react-router-dom'

const GalleryEightArts = (props) => {
  return (
    <div>
      {console.log('Gal8Arts')}
      <Link to="/">Hide 8x8 Arts</Link>
      <div>
        <img className="pic-sizer" src='8x8-1.png' />
        <img className="pic-sizer" src='8x8-2.png' />
        <img className="pic-sizer" src='8x8-3.png' />
        <img className="pic-sizer" src='8x8-4.png' />
      </div>
    </div>

  )
}

export default GalleryEightArts
