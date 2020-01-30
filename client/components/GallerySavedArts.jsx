import React from 'react'
import { Link, Route } from 'react-router-dom'

const GallerySavedArts = (props) => {
  return (
    <div>
      {console.log('GalSavedArts')}
      <Link to="/">Hide my saved image gallery</Link>
      <div>
        <img className="pic-sizer" src='5x5-1.png' />
        <img className="pic-sizer" src='5x5-2.png' />
        <img className="pic-sizer" src='5x5-3.png' />
        <img className="pic-sizer" src='5x5-4.png' />
      </div>
    </div>
  )
}

export default GallerySavedArts
