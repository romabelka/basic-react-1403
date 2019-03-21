import React, { Component } from 'react'

export default (FoldableComponent) =>
  class Foldable extends Component {
    state = {
      isExpanded: false
    }

    toggleExpansion = () => {
      this.setState({ isExpanded: !this.state.isExpanded })
    }

    render() {
      return (
        <FoldableComponent
          {...this.props}
          isExpanded={this.state.isExpanded}
          toggleExpansion={this.toggleExpansion}
        />
      )
    }
  }
