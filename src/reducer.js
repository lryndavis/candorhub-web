import $ from 'jquery';

const initialState = {
  signedIn: false,
  showCommentForm: true,
  displayComments: false,
  imageForCritique: {
    title: '',
    image: '',
    description: ''
  },
  questionsForComment: [{
    id: 0,
    body: ''
  }, {
    id: 0,
    body: ''
  }, {
    id: 0,
    body: ''
  }]
};

function setState(state, newState) {
  return {...state, ...newState};
}

function signIn(state) {
  return { ...state, signedIn: true};
}

function setImageToCritique(state, responseJSON) {
  if (responseJSON.images) {
    //handle getting an image from an array
    return { ...state, imageForCritique: responseJSON.images[0]};
  } else if (responseJSON.image) {
    //handle getting a specific image
    return { ...state, imageForCritique: responseJSON.image};
  }
}

function setQuestionsForComment(state, responseJSON) {
  return { ...state, questionsForComment: responseJSON.questions};
}

function commentSubmitted(state, responseJSON) {
  return { ...state, commentSubmitted: true}
}

function hideForm(state) {
  return { ...state, showCommentForm: false};
}

function displayComments(state) {
  return { ...state, displayComments: true};
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SIGN_IN':
      return signIn(state);
    case 'SET_IMAGE_TO_CRITIQUE':
      return setImageToCritique(state, action.responseJSON);
    case 'COMMENT_SUBMITTED':
      return commentSubmitted(state, action.responseJSON);
    case 'SET_QUESTIONS_FOR_COMMENT':
      return setQuestionsForComment(state, action.responseJSON);
    case 'HIDE_FORM':
      return hideForm(state);
    case 'DISPLAY_COMMENTS':
      return displayComments(state);
    }
  return state;
}
