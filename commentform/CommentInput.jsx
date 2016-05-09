// import React from 'react';
//
// export const CommentInput = React.createClass({
//   getCommentNumber: function() {
//     return this.props.commentNumber;
//   },
//
//   getCommentTextState: function() {
//     switch (this.getCommentNumber) {
//       case 1: return this.state.comment1Text;
//       case 2: return this.state.comment2Text;
//       case 3: return this.state.comment3Text;
//       default: return this.state.comment1Text;
//     }
//   },
//
//   handleTextChange: function(event) {
//
//   }.
//
//   render: function() {
//     return <div className="commentInput">
//       <input
//         type="text"
//         placeholder="Add a response to this question..."
//         value={this.getCommentTextState}
//         onChange={this.handleTextChange}
//         />
//     </div>
//   }
// });
//
// function mapStateToProps(state) {
//   switch (this.getCommentNumber) {
//     case expression:
//
//       break;
//     default:
//
//   }
//   return {
//     comment1Text: state.get('comment1Text')
//   };
// }
//
// export const CommentInputContainer = connect(
//   mapStateToProps,
//   actionCreators
// )(SignIn);
