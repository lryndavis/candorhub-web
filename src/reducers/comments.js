const initialState = {
  showCommentForm: true,
  displayComments: false,
  questionsForComment: [{
    id: 0,
    body: ''
  }, {
    id: 0,
    body: ''
  }, {
    id: 0,
    body: ''
  }],
}

function commentSubmitted(state, responseJSON) {
  return { ...state, commentSubmitted: true}
}

function setQuestionsForComment(state, responseJSON) {
  return { ...state, questionsForComment: responseJSON.questions};
}

function hideForm(state) {
  return { ...state, showCommentForm: false};
}

function displayComments(state) {
  return { ...state, displayComments: true};
}

export default function comments(state = initialState, action) {
    switch (action.type) {
      case 'COMMENT_SUBMITTED':
        return commentSubmitted(state, action.responseJSON);
      case 'SET_QUESTIONS_FOR_COMMENT':
        return setQuestionsForComment(state, action.responseJSON);
      case 'HIDE_FORM':
        return hideForm(state)
      case 'DISPLAY_COMMENTS':
        return displayComments(state);
      default:
        return state;
    }
}
