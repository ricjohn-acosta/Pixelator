import React from 'react'
import Pixel from './Pixel.jsx'
import { Link } from 'react-router-dom'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pixels: [],
      color: 'rgb(0,0,0)',
      number: '0',
      display: {
        margin: 'auto',
        maxWidth: '0',
        maxHeight: '60px'
      }
    }
  }

pixelClick = (id) => {
  const newPixels = [...this.state.pixels]
  newPixels[id].color = this.state.color
  this.setState({ pixels: newPixels })
}

pixelClear = (id, evt) => {
  evt.preventDefault()
  const newPixels = [...this.state.pixels]
  newPixels[id].color = 'white'
  this.setState({ pixels: newPixels })
}

// pixelSpray = (id, evt) => {
//   const newPixels = [...this.state.pixels]
//   newPixels[id].color = this.state.color
//   this.setState({ pixels: newPixels })
// }

clickHandler = (e) => {
  this.setState({
    color: e.target.value
  })
}

sizeHandler = (e) => {
  const num = e.target.value
  let boxArr = []
  for (var i = 0; i < num; i++) {
    boxArr.push({
      id: i,
      color: 'white'
    })
  }
  this.setState({
    pixels: boxArr,
    margin: 'auto',
    number: num,
    display: {
      margin: 'auto',
      maxWidth: Math.sqrt(num) * 52,
      maxHeight: Math.sqrt(num) * 52
    }
  })
}

render () {
  return (
    <>
    <div style={this.state.display}>
      {this.state.pixels.map(pixel => (
        <Pixel id={pixel.id} key={pixel.id} color={pixel.color} onClick={this.pixelClick} onContextMenu={this.pixelClear} onMouseOver={this.pixelSpray}/>
      ))}
    </div>
    <div>
      <h2 className="middle-text">Click to draw pixels!
        <br/>
      Right click to delete pixels!
      </h2>
    </div>
    <div className="button">
      <button onClick={this.clickHandler} value='black'>Black</button>
      <button onClick={this.clickHandler} value='red'>Red</button>
      <button onClick={this.clickHandler} value='green'>Green</button>
      <button onClick={this.clickHandler} value='blue'>Blue</button>
      <button onClick={this.clickHandler} value='yellow'>Yellow</button>
      <button onClick={this.clickHandler} value='purple'>Purple</button>
      <button onClick={this.clickHandler} value='orange'>Orange</button>
      <button onClick={this.clickHandler} value='violet'>Violet</button>
      <button onClick={this.clickHandler} value='teal'>Teal</button>

    </div>
    <div className="grid-size-btn, button" >
      <button onClick={this.sizeHandler} value="25">5x5</button>
      <button onClick={this.sizeHandler} value="64">8x8</button>
      <button onClick={this.sizeHandler} value="100">10x10</button>
    </div>
    </>
  )
}
}

export default Main
