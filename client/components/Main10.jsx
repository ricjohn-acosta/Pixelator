import React from 'react'
import Pixel from './Pixel.jsx'
import { Link } from 'react-router-dom'

class Main10 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'black'
    }
  }

clickHandlerR = () => {
  this.setState({
    color: 'red'
  })
}

clickHandlerG = () => {
  this.setState({
    color: 'green'
  })
}

clickHandlerB = () => {
  this.setState({
    color: 'blue'
  })
}

clickHandlerY = () => {
  this.setState({
    color: 'yellow'
  })
}

render () {
  let boxArr = []
  for (var i = 0; i < 100; i++) {
    boxArr.push(<Pixel id={i} key={i} color={this.state.color}/>)
  }

  return (
    <>
    <div className="display-box10">
      {boxArr}
    </div>
    <div>
      <h2 className="middle-text">Click to draw pixels!
        <br/>
      Right click to delete pixels!
      </h2>
    </div>
    <div className="button">
      <button onClick={this.clickHandlerR} >Red</button>
      <button onClick={this.clickHandlerG} >Green</button>
      <button onClick={this.clickHandlerB} >Blue</button>
      <button onClick={this.clickHandlerY} >Yellow</button>
    </div>
    </>
  )
}
}

export default Main10
