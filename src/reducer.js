import $ from 'jquery';

const initialState = {
  signedIn: false,
  showCommentForm: true,
  displayComments: false,
  imageForCritique: {
    title: '',
    description: '',
    image: {
      image: ''
    }
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
  }],
  //image gallery
  imagesForGallery: [{
    title: '',
    image: '',
    description: ''
  }],
  imageById: {
    title: '',
    description: '',
    image: ''
  },
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

//get specific image for gallery view
function setImageById(state, responseJSON) {
  return {...state, imageById: responseJSON.image};
}

function setQuestionsForComment(state, responseJSON) {
  return { ...state, questionsForComment: responseJSON.questions};
}

//image gallery

function setImageGallery(state, responseJSON) {
  return { ...state, imagesForGallery: responseJSON.images};
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

function isUploadingImage(state) {
  return { ...state,  isUploadingImage: true }
}

function doneUploadingImage(state) {
  return { ...state, isUploadingImage: false }
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
    case 'SET_IMAGE_GALLERY':
      return setImageGallery(state, action.responseJSON);
    case 'SET_IMAGE_BY_ID':
      return setImageById(state, action.responseJSON);
    case 'HIDE_FORM':
      return hideForm(state);
    case 'DISPLAY_COMMENTS':
      return displayComments(state);
    case 'SET_SIGNED_URL':
      return setSignedUrl(state, action.responseJSON);
    case 'IS_UPLOADING_IMAGE':
      return isUploadingImage(state);
    case 'DONE_UPLOADING_IMAGE':
      return doneUploadingImage(state);
    case 'ON_FINISHED_IMAGE_UPLOAD':
      return setState(state, {finishedImageUpload: true});
    }
  return state;
}
