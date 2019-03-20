import React, { Component } from 'react'

export default (OriginalComponent) =>
  class TogglerDecorator extends Component {
    state = {
      isOpen: false
    }

    toggleOpen = () => {
      const newIsOpen = !this.state.isOpen
      this.setState({ isOpen: newIsOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
