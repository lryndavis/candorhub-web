import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import GalleryCommentBox from './GalleryCommentBox';
import GalleryQuestionList from './GalleryQuestionList';


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
      <div className="individual-question-box">
        <p className="question" key={this.props.question.id} onClick={ this.onClick }>
          { this.state.navArrowChange ?
            <NavigationArrowDropUp /> :
            <NavigationArrowDropDown /> }
          {this.props.question.body}
        </p>
        <div>
          { this.state.commentShow ?
            <GalleryCommentBox question={this.props.question} /> :
            null }
        </div>
      </div>
      );
    }
  });
