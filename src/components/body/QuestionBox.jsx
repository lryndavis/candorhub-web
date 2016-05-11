import React from 'react';
import CommentBox from './CommentBox';
import QuestionList from './QuestionList';

export default React.createClass({

  getInitialState: function() {
    return { commentShow: false };
  },

  onClick: function() {
    this.setState({ commentShow: !this.state.commentShow });
  },

  render: function() {
    return (
      <div>
        <h2 key={this.props.question.id} onClick={ this.onClick }>
          {this.props.question.body}
        </h2>
        <div>
          { this.state.commentShow ? <CommentBox question={this.props.question} /> : null }
        </div>
      </div>
      );
    }
  });
