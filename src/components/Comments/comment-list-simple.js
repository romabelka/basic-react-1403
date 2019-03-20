import React, { Component } from 'react'
import Comment from './comment'

class Comments extends Component {
  state = {
    isOpen: true
  }

  onButtonClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { comments } = this.props
    const text = this.state.isOpen ? 'close' : 'open'

    const commentItems = comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))

    const list = this.state.isOpen && <ul>{commentItems}</ul>

    return (
      <div>
        <h3>Comments:</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {list}
      </div>
    )
  }
}

export default Comments
