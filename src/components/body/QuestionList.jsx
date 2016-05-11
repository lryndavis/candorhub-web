import React from 'react';
import CommentBox from './CommentBox';
import QuestionBox from './QuestionBox';

export default React.createClass({

  render: function() {
    let questions = this.props.imageForCritique.questions;
    var questionRender = questions.map(function(question) {
      console.log(question)
      return (
        <div>
          <QuestionBox question={question} />
        </div>
      );
    });
    return (
      <div>
        {questionRender}
      </div>
    );
  }
});
