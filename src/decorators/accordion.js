//HOC === Higher Order Component == decorator
import React, { Component } from 'react'

export default (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    }

    // doesn't work button close
    toggleOpenItem = (id) => () => {
      const { openItemId } = this.state;

      if (openItemId === id) {
        return this.setState({ openItemId: null })
      }

      return this.setState({ openItemId: id })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
