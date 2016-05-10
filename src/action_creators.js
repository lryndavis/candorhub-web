import fetch from 'isomorphic-fetch';

const apiRoot = "http://candorhub-api.herokuapp.com/v1/"
const randomImageEndpoint = apiRoot + "images?count=1";
const submitCommentEndpoint = apiRoot + "comments";
const getQuestionsEndpoint = apiRoot + "questions?count=3"; 

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function signIn(state) {
  return {
    type: 'SIGN_IN',
    state
  };
}

export function hideForm(state) {
  return {
    type: 'HIDE_FORM',
    state
  }
}

export function displayComments(state) {
  return {
    type: 'DISPLAY_COMMENTS',
    state
  }
}

export function commentSubmitted(state, responseJSON) {
  console.log('COMMENT_SUBMITTED');
  return {
    type: 'COMMENT_SUBMITTED',
    state,
    responseJSON
  }
}

export function postSubmitComment(state, body) {
  return function (dispatch) {
    return fetch(submitCommentEndpoint, {
      method: 'POST',
      headers: {
        'ACCEPT': 'application/json',
        'CONTENT_TYPE': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch(commentSubmitted(state, responseJSON)),
      dispatch(hideForm(state)),
      dispatch(displayComments(state))
    });
  }
}

export function setImageToCritique(state, responseJSON) {
  return {
    type: "SET_IMAGE_TO_CRITIQUE",
    state,
    responseJSON
  };
}

export function getRandomImageFromServer(state) {
  return function (dispatch) {
    return fetch(randomImageEndpoint)
    .then(response => response.json())
    .then(responseJSON => dispatch(setImageToCritique(state, responseJSON)));
  }
}

export function setQuestionsForComment(state, responseJSON) {
  return {
    type: 'SET_QUESTIONS_FOR_COMMENT',
    state,
    responseJSON
  } 
}

export function getQuestionsForComment(state) {
  return function (dispatch) {
    return fetch(getQuestionsEndpoint)
    .then(response => response.json())
    .then(responseJSON => dispatch(setQuestionsForComment(state, responseJSON)));
  } 
}
