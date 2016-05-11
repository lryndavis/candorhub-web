import React from 'react';
import CommentBox from './CommentBox';
import QuestionList from './QuestionList';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';


export default React.createClass({

  getInitialState: function() {
    return { commentShow: false };
  },

  onClick: function() {
    this.setState({ commentShow: !this.state.commentShow });
  },

  render: function() {
    return (
      <div className="individual-question-box">
        <h3 key={this.props.question.id} onClick={ this.onClick }>
          <NavigationArrowDropDown />
          {this.props.question.body}
        </h3>
        <div>
          { this.state.commentShow ? <CommentBox question={this.props.question} /> : null }
        </div>
      </div>
      );
    }
  });
