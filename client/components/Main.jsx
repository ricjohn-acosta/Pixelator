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
  for (var i = 0; i < 500; i++) {
    boxArr.push(<Pixel id={i} key={i} color={this.state.color}/>)
  }
  
  return (
    <>
    {boxArr}
    <button onClick={this.clickHandler}>change colour</button>
    </>
  )
}
}

export default Main
