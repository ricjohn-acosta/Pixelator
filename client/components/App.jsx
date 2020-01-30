import React from 'react'
import { Route } from 'react-router-dom'

import Left from './Left'
import Main from './Main'
import Right from './Right'

const App = () => {
  return (
    <>
      <h1 className="middle-text">The Pixelator</h1>
    <div className="main-div">
      <div><Route path="/" component={ Left } /></div>
      <div><Route path="/" component={ Main }/></div>
      <div><Route path="/" component= { Right }/></div>
    </div>
    </>
  )
}

export default App
