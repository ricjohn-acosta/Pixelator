import React from 'react'
import { Link, Route } from 'react-router-dom'

import GalleryFive from './GalleryFive'
import GalleryEight from './GalleryEight'
import GalleryFiveArts from './GalleryFiveArts'

const Right = (props) => {
  return (
    <>
    <h1>Art Gallery</h1>
    <div>
      <Route path="/" component={ GalleryFive } />
      <Route path="/gal5" component={ GalleryFiveArts } />
      <Route path="/" component={ GalleryEight } />
      {console.log('Main Right')}
    </div>
    </>
  )
}

export default Right
