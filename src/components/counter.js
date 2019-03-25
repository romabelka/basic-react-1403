import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={this.handleButtonClick}>increment</button>
      </div>
    )
  }

  handleButtonClick = () => {
    this.props.dispatch({
      type: 'increment'
    })
  }
}

const mapStateToProps = (storeState) => ({
  count: storeState.counter
})

export default connect(mapStateToProps)(Counter)
