//HOC === Higher Order Component == decorator
import React, { Component } from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends Component {
    state = {
      isOpen: false
    }

    toggleOpenItem = () => this.setState((state) => ({ isOpen: !state.isOpen }))

    render() {
      return (
        <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
      )
    }
  }
