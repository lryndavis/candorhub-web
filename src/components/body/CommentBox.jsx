import React from 'react';

export default React.createClass({

  render: function() {
    var questionNodes = this.props.imageForCritique.questions.map(function(question) {
      console.log(question.body)
      return (
        <div key={question.id}>
          {question.body}
        </div>
      );
    });
    return (
      <div className="question-list">
        {questionNodes}
      </div>
    );
  }
});
