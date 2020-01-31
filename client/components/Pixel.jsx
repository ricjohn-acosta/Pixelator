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

  render () {
    const { id, onClick, onContextMenu } = this.props
    const style = {
      width: '50px',
      height: '50px',
      backgroundColor: this.props.color,
      display: 'block',
      overflow: 'hidden',
      float: 'left',
      borderStyle: 'solid',
      borderWidth: '1px'
    }
    return (
      <div style={style} onClick={() => onClick(id)} onContextMenu={(evt) => onContextMenu(id, evt)}>  </div>
    )
  }
}

export default Pixel
