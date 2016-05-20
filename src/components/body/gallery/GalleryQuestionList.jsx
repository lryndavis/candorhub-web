import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GalleryQuestionBox from './GalleryQuestionBox';
import GalleryCommentBox from './GalleryCommentBox';
import GalleryView from './GalleryView';


export default React.createClass({

  render: function() {
    var questionListRender = this.props.imageById.questions.map(function(question) {
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
        <h2 className="comments__header">Critique</h2>
        {questionListRender}
      </div>
    );
  }
});

//conditional logic in question list render
//array.indexOf
//if this.props.imageById.indexof(question) =0
