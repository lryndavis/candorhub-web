import React from 'react';
import CommentBox from './CommentBox';
import QuestionBox from './QuestionBox';

export default React.createClass({

  render: function() {
    console.log("in questionlist");
    console.log(this.props.imageForCritique);
    console.log(this.props.imageForCritique.imageForCritique.questions)
    let questions = this.props.imageForCritique.imageForCritique.questions;
    console.log(questions)
    var questionRender = questions.map(function(question) {
      return (
        <div key={question.id}>
          <QuestionBox question={question} />
        </div>
      );
    });
    return (
      <div>
        <h2 className="criticisms-header">Critique</h2>
        {questionRender}
      </div>
    );
  }
});
