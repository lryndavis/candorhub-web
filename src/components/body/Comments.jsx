import React from 'react';

export default React.createClass({

  render: function() {
    var commentNodes = this.props.question.comments.map(function(comment){
    return (
      <li key={comment.id}>
        {comment.body}
      </li>
    );
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});
