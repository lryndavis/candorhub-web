import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';


import QuestionBox from './QuestionBox';

const avatarStyles = {
  marginBottom: 5,
};

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment) {
    return (
      <div className="comments" key={comment.id}>

        <Avatar style={avatarStyles}>U</Avatar>

        <span className="comments__body">
          {comment.body}
        </span>

        <p className="comments__meta">
          <span className="comments__date">Date: 5/11/2016</span>
          <span className="comments__user">By: User</span>
        </p>

      </div>
      );
    });
    return (
      <div className="comments__comment-list">
        {commentRender}
      </div>
    );
  }
});
