import React from 'react';
import GalleryQuestionBox from './GalleryQuestionBox';
import GalleryCommentBox from './GalleryCommentBox';
import GalleryView from './GalleryView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default React.createClass({

  render: function() {
    console.log(this.props.imageById);
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
