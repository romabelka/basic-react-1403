import React, { Component } from 'react'
import Comment from './comment'
// import DecoratorAccordion from '../decorators/accordion'
import useAccordion from '../custom-hooks/accordion'

// Реализация компонетна через декоратор

// class CommentsList extends Component{
//   getComments(){
//     const {comments, toggleOpenItem, openItemId} = this.props;
//       if(!comments) return
//       return comments.map((comment) => (
//         <li key={comment.id}>
//           <Comment
//             comment={comment}
//             isOpen={comment.id === openItemId}
//             onBtnClick={toggleOpenItem(comment.id)}
//           />
//         </li>
//     ))
//   }
//   render(){
//       return <ul>{this.getComments()}</ul>
//   }
// }

// Реализация компонента через hooks

function CommentsList({ comments }) {
  function getComments() {
    const { openItemId, toggleOpenItem } = useAccordion()
    if (!comments) return
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment
          comment={comment}
          isOpen={comment.id === openItemId}
          onBtnClick={toggleOpenItem(comment.id)}
        />
      </li>
    ))
  }
  return <ul>{getComments()}</ul>
}

export default CommentsList
// export default DecoratorAccordion(CommentsList)
