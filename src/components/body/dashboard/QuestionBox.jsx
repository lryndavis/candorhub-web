import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import React from 'react';

import CommentBox from './CommentBox';
import QuestionList from './QuestionList';
import {formatQuestion} from '../../../lib/FormatQuestion';

export default React.createClass({

  getInitialState: function() {
    return { commentShow: true };
    return { navArrowChange: false };
  },

  onClick: function() {
    this.setState({ commentShow: !this.state.commentShow });
    this.setState({ navArrowChange: !this.state.navArrowChange });
  },

  render: function() {
    return (
      <div className="question__question-box">
        <h3 className="question" key={this.props.question.id} onClick={ this.onClick }>
          { this.state.navArrowChange ? <NavigationArrowDropUp /> : <NavigationArrowDropDown /> }
          {formatQuestion(this.props.question.body)}
        </h3>
        <div className="comment-list">
          { this.state.commentShow ? <CommentBox question={this.props.question} /> : null }
        </div>
      </div>
      );
    }
  });
