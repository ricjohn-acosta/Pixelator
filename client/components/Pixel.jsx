import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        id: props.id,
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '0',
        padding: '0'
      }
    }
  }
  mouseClick = () => {
    this.setState({
      style: {
        width: '100px',
        height: '100px',
        backgroundColor: this.props.color,
        display: 'block',
        overflow: 'hidden',
        float: 'left'

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
