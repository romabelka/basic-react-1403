//HOC === Higher Order Component == decorator
import React, { Component } from 'react'

export default (OriginalComponent) =>
  class ToggleOpenDecorator extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => () => this.setState({ openItemId })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openArticleId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
