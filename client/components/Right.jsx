import React from 'react'
import { Link, Route } from 'react-router-dom'

import GalleryFive from './GalleryFive'
import GalleryEight from './GalleryEight'
import GalleryFiveArts from './GalleryFiveArts'
import GalleryEightArts from './GalleryEightArts'

const Right = (props) => {
  return (
    <>
    <h1 class='body-text'>Art Gallery</h1>
    <div>
      <Route path="/" component={ GalleryFive } />
      <Route path="/gal5" component={ GalleryFiveArts } />
      <Route path="/" component={ GalleryEight } />
      <Route path="/gal8" component={ GalleryEightArts } />
      {console.log('Main Right')}
    </div>
    </>
  )
}

export default Right
