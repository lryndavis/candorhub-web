import React from 'react';
import Comments from './Comments';

export default React.createClass({

  render: function() {
    let questions = this.props.imageForCritique.questions;
    var questionNodes = questions.map(function(question) {
      return (
        <h2 key={question.id}>
          {question.body}
          <Comments question={question} />
        </h2>
      );
    });
    return (
      <div className="question-list">
        {questionNodes}
      </div>
    );
  }
});
