import React from 'react';
import QuestionBox from './QuestionBox';

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment){
    return (
      <div className="individual-comment-box">
        <p key={comment.id}>
          {comment.body}
          <p>By: User</p>
        </p>
      </div>
      );
    });
    return (
      <div className="comment-list">
        {commentRender}
      </div>
    );
  }
});
