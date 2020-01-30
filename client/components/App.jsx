import React from 'react'
import { Route } from 'react-router-dom'

import Left from './Left'
import Main from './Main'
import Main5 from './Main5'
import Main10 from './Main10'
import Right from './Right'

const App = () => {
  return (
    <>
      <h1 className="middle-text">The Pixelator</h1>

    <div className="main-div">
      <div><Route path="/" component={ Left } /></div>
      <div className="main-screen-max">
        <Route path="/:size" component={ Main }/>
      </div>
      <div><Route path="/" component= { Right }/></div>
    </div>
    </>
  )
}

export default App
