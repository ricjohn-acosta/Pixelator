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
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '0',
        padding: '0'
      }
    }
  }
  resetColor = e => {
    e.preventDefault()
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        display: 'block',
        overflow: 'hidden',
        float: 'left'
      }
    })
  }
  mouseClick = () => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.props.color,
        display: 'block',
        overflow: 'hidden',
        float: 'left'

      }
    })
  }
  render () {
    return (
      <div style={this.state.style} onClick={this.mouseClick} onContextMenu={this.resetColor}>  </div>
    )
  }
}

export default Pixel
