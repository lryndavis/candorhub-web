import React from 'react';
import QuestionBox from './QuestionBox';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const avatarStyles = {
  marginBottom: 5,
};

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment){
    return (
      <div className="individual-comment-box">
        <Avatar style={avatarStyles}>U</Avatar>
        <span className="comment-body" key={comment.id}>
          {comment.body}
        </span>
        <p className="comment-meta">
          <span className="comment-date">Date: 5/11/2016</span>
          <span className="comment-user">By: User</span>
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
