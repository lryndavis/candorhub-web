import React from 'react';
import QuestionBox from './QuestionBox';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment){
    return (
      <div className="individual-comment-box">
        <Avatar>U</Avatar>
        <span className="comment-body" key={comment.id}>
          {comment.body}
        </span>
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
