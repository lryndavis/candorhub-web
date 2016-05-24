import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import GalleryQuestionBox from './GalleryQuestionBox';
import GalleryCommentBox from './GalleryCommentBox';
import GalleryView from './GalleryView';
import GalleryNoComments from './GalleryNoComments';


export default React.createClass({

  render: function() {
    var allQuestionsList = this.props.imageById.questions;
    console.log(this.props.imageById);
    var questionListRender = allQuestionsList.map(function(question) {
      return (
        <div key={question.id}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <GalleryQuestionBox question={question} />
          </MuiThemeProvider>
        </div>
      );
    });
    return (
      <div>
        { this.props.imageById.questions.length < 1 ?
          <div>
            <GalleryNoComments />
          </div> :
          <div>
            <h2 className="comments__header">Critique</h2>
            {questionListRender}
          </div>
        }
      </div>
    );
  }
});
