import React from 'react';
import CommentBox from './CommentBox';
import QuestionList from './QuestionList';

export default React.createClass({

  render: function() {
    return (
      <div>
        <h2>
          {this.props.question.body}
        </h2>
        <CommentBox question={this.props.question} />
      </div>
      );
    }
  });



  // getInitialState: function() {
  //   return { commentShow: false };
  // },
  //
  // onClick: function() {
  //   this.setState({ commentShow: !this.state.commentShow });
  // },
  //
  // render: function() {
  //   return (
  //     <div className="individual-question-box">
  //       <h2 key={question.id} onClick={ this.onClick }>
  //         {question.body}
  //       </h2>
  //       <div>
  //         {
  //           this.state.commentShow
  //           ? <CommentBox question={question} />
  //         }
  //       </div>
  //     </div>
  //     );
  //   }
  // });
  //
  //
  //
