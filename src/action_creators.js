import fetch from 'isomorphic-fetch';

const randomImageEndpoint = "http://candorhub-api.herokuapp.com/v1/images?count=1";
const submitCommentEndpoint = "http://candorhub-api.herokuapp.com/v1/comments";

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

export function commentSubmitted(state, responseJSON) {
  return {
    type: 'COMMENT_SUBMITTED',
    state,
    responseJSON
  }
}

export function postSubmitComment(state, body) {
  console.log(JSON.stringify(body));
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
    .then(responseJSON => dispatch(commentSubmitted(state, responseJSON)));
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
