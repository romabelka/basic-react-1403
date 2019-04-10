import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToggleOpen extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    isOpen: true
  }

  toggleOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  render() {
    return <div>{this.props.children(this.state.isOpen, this.toggleOpen)}</div>
  }
}

export default ToggleOpen
