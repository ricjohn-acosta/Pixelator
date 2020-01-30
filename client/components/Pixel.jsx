import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        id: props.id,
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        display: 'inline-block'
      }
    }
  }
  mouseClick = () => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.props.color
      }
    })
  }
  render () {
    return (
      <div style={this.state.style} onClick={this.mouseClick}>  </div>
    )
  }
}

export default Pixel
