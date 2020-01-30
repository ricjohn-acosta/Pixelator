import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        id: props.id,
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        borderStyle: 'solid',
        borderWidth: '1px'
      }
    }
  }
  resetColor = e => {
    e.preventDefault()
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        display: 'block',
        overflow: 'hidden',
        float: 'left',
        borderStyle: 'solid',
        borderWidth: '1px'
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
        float: 'left',
        borderStyle: 'solid',
        borderWidth: '1px'

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
