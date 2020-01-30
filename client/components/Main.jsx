import React from 'react'
import Pixel from './Pixel.jsx'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'black'
    }
  }

clickHandler = () => {
  this.setState({
    color: 'white'
  })
}



render () {
  let boxArr = []
  for (var i = 0; i < 64; i++) {
    boxArr.push(<Pixel id={i} key={i} color={this.state.color}/>)
  }

  return (
    <>
    <div className="display-box">
      {boxArr}
    </div>
    <div className="button">
      <button onClick={this.clickHandler} >change colour</button>
    </div>
    </>
  )
}
}

export default Main
