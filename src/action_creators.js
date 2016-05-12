import fetch from 'isomorphic-fetch';

const apiRoot = "http://candorhub-api.herokuapp.com/v1/"
const randomImageEndpoint = apiRoot + "images?count=1";
const specificImageEndpoint = apiRoot + "images/";
const submitCommentEndpoint = apiRoot + "comments";
const getQuestionsEndpoint = apiRoot + "questions?count=3";
const uploadImageEndpoint = "";
const multipleRandomImagesEndpoint = apiRoot + "images?count=4";
const imageUploadEndpoint = apiRoot + "images";

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

export function setImageToCritique(state, responseJSON) {
  return {
    type: "SET_IMAGE_TO_CRITIQUE",
    state,
    responseJSON
  };
}

export function setQuestionsForComment(state, responseJSON) {
  return {
    type: 'SET_QUESTIONS_FOR_COMMENT',
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
      dispatch(displayComments(state)),
      dispatch(getSpecificImageFromServer(state, state.imageForCritique.id))
    });
  }
}

export function getRandomImageFromServer(state) {
  return function (dispatch) {
    return fetch(randomImageEndpoint)
    .then(response => response.json())
    .then(responseJSON => dispatch(setImageToCritique(state, responseJSON)));
  }
}

<<<<<<< HEAD
//image gallery
export function getMultipleImagesFromServer(state) {
  return function (dispatch) {
    return fetch(multipleRandomImagesEndpoint)
    .then(response => response.json())
    .then(responseJSON => dispatch(setImageGallery(state, responseJSON)));
  }
}

export function setImageGallery(state, responseJSON) {
  return {
    type: 'SET_IMAGE_GALLERY',
    state,
    responseJSON
  }
}

export function setQuestionsForComment(state, responseJSON) {
  return {
    type: 'SET_QUESTIONS_FOR_COMMENT',
    state,
    responseJSON
=======
export function getSpecificImageFromServer(state, id) {
  return function (dispatch) {
    return fetch (specificImageEndpoint + id)
    .then(response => response.json())
    .then(responseJSON => dispatch(setImageToCritique(state, responseJSON)));
>>>>>>> 6dcdceaaf939df4bbbe7a1292087b57a9160fd1e
  }
}

export function getQuestionsForComment(state) {
  return function (dispatch) {
    return fetch(getQuestionsEndpoint)
    .then(response => response.json())
    .then(responseJSON => dispatch(setQuestionsForComment(state, responseJSON)));
  }
}

export function startImageUpload(image, title, description) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({type: 'IS_UPLOADING_IMAGE'})
    const imageForUpload = {
      image: {
        image: image,
        title: title,
        description: description
      }
    }
    return fetch(imageUploadEndpoint, {
      method: 'POST',
      headers: {
        'ACCEPT': 'application/json',
        'CONTENT_TYPE': 'application/json'
      },
      body: JSON.stringify(imageForUpload)
    })
    .then(response => response.json())
    .then(responseJSON => dispatch(finishedImageUpload(state, responseJSON)),
                          dispatch({type: 'DONE_UPLOADING_IMAGE'}));
  }
}

export function finishedImageUpload(state, responseJSON) {
  console.log(responseJSON)
  return {
    type: "FINISHED_IMAGE_UPLOAD",
    state,
    responseJSON
  }
}
