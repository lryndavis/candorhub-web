import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Router, Route, Link } from 'react-router';
import React from 'react';
import moment from 'moment';

import QuestionBox from './QuestionBox';

const avatarStyles = {
  marginBottom: 5,
};

const getTimestamp = function(comment) {
  if (comment.updated_at) {
    return moment(comment.updated_at).fromNow();
  } else {
    return "unknown date";
  }
}

const getUsername = function(comment) {
  if (comment.user) {
    return comment.user.username;
  } else {
    return "unknown user";
  }
}
//get first letter of username for avatar
const getAvatar = function(comment) {
  if (comment.user) {
    return (comment.user.username.charAt(0)).toUpperCase();
  } else {
    return "U";
  }
}

const getUserId = function(comment) {
  if (comment.user) {
    return comment.user.id;
  } else {
    return "0";
  }
}

export default React.createClass({

  render: function() {
    let comments = this.props.question.comments;
    var commentRender = comments.map(function(comment) {
    return (
      <div className="comments" key={comment.id}>
        <Avatar
          backgroundColor={'#A2CAD2'}
          style={avatarStyles}>
          {getAvatar(comment)}
        </Avatar>
        <span className="comments__body">
          {comment.body}
        </span>
        <p className="comments__meta">
          <span className="comments__date">{getTimestamp(comment)}</span>
          <Link to={`/profilegallery/${getUserId(comment)}`} params={{id: getUserId(comment)}}>
            <span className="comments__user">{getUsername(comment)}</span>
          </Link>
        </p>
      </div>
      );
    });
    return (
      <div className="comments__comment-box">
        {commentRender}
      </div>
    );
  }
});
