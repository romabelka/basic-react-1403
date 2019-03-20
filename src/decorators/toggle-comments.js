import React, { Component } from 'react'

export default (OriginalComponent) =>
  class ToogleCommentDecorator extends Component {
    state = {
      isShowComments: true
    }

    toogleIsShowComments = () => () => this.setState({ isShowComments: !this.state.isShowComments })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isShowComments={this.state.isShowComments}
          toogleIsShowComments={this.toogleIsShowComments}
        />
      )
    }
  }
