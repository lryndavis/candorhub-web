import React from 'react';
import CommentBox from './CommentBox';

export default React.createClass({

  render: function() {
    let questions = this.props.imageForCritique.questions;
    var questionList = questions.map(function(question) {
      return (
        <div className="individual-question-box">
          <h2 key={question.id}>
            {question.body}
            <CommentBox question={question} />
          </h2>
        </div>
      );
    });
    return (
      <div className="question-list">
        {questionList}
      </div>
    );
  }
});
