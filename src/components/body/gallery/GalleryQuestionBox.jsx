import React from 'react';
import GalleryCommentBox from './GalleryCommentBox';
import GalleryQuestionList from './GalleryQuestionList';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';


export default React.createClass({

  getInitialState: function() {
    return { commentShow: false };
    return { navArrowChange: false };
  },

  onClick: function() {
    this.setState({ commentShow: !this.state.commentShow });
    this.setState({ navArrowChange: !this.state.navArrowChange });
  },

  render: function() {
    return (
      <div className="individual-question-box">
        <h3 className="question-body" key={this.props.question.id} onClick={ this.onClick }>
          { this.state.navArrowChange ? <NavigationArrowDropUp /> : <NavigationArrowDropDown /> }
          {this.props.question.body}
        </h3>
        <div>
          { this.state.commentShow ? <GalleryCommentBox question={this.props.question} /> : null }
        </div>
      </div>
      );
    }
  });