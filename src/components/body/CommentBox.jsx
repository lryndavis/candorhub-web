import React from 'react';

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentList = comments.map(function(comment){
    return (
      <div className="individual-comment-box">
        <p key={comment.id}>
          {comment.body}
        </p>
      </div>
      );
    });
    return (
      <div className="comment-list">
        {commentList}
      </div>
    );
  }
});
